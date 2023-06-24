<script setup lang="ts">

const config = useRuntimeConfig()
const route = useRoute()

let state = reactive({
  item: null,
})

onMounted(async () => {
  console.log(route.params.id);
  const response = await fetch(`${config.public.HEC_API_HOST}/real-estates/${route.params.id}?expand=images,related`)
  state.item = await response.json()
  console.log(state.item)
})

</script>

<template>
  <v-row v-if="state.item">
    <v-col cols="8">
      <RealEstateItem :item="state.item" :full="1"/>
    </v-col>
    <v-col cols="4">
      <SiteContactForm :item="state.item" />
    </v-col>
  </v-row>
  <section v-if="state.item && state.item.related.length">
    <h2>Similar properties</h2>
    <RealEstateList :items="state.item.related"/>
  </section>
</template>

<style scoped>

</style>
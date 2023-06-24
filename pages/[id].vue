<script setup lang="ts">

const config = useRuntimeConfig()
const route = useRoute()

let state = reactive({
  item: null,
})

onMounted(async () => {
  const response = await fetch(`${config.public.HEC_API_HOST}/real-estates/${route.params.id}?expand=images,related`)
  state.item = await response.json()
})

</script>

<template>
  <article>
    <v-row v-if="state.item">
      <v-col cols="8">
        <RealEstateItem :item="state.item" :full="1"/>
      </v-col>
      <v-col cols="4">
        <SiteContactForm :item="state.item"/>
      </v-col>
      <v-col v-if="state.item && state.item.related.length" tag="section" cols="12">
        <h2>Similar properties</h2>
        <RealEstateList :items="state.item.related"/>
      </v-col>
      <p v-else>
        Loading...
      </p>
    </v-row>
  </article>
</template>

<style scoped>

</style>
<script setup lang="ts">
const route = useRoute()

const {data, pending, refresh, error} = await useHecFetch(`/real-estates/${route.params.id}`, {
  query: {
    expand: "images,related"
  },
  onResponse({request, response, options}) {
    console.log("/real-estates/:id", request, response, options);
  }
})

</script>

<template>
  <article>
    <v-row v-if="!pending">
      <v-col cols="12" md="8">
        <RealEstateItem :item="data" :full="1"/>
      </v-col>
      <v-col cols="12" md="4">
        <SiteContactForm :item="data"/>
      </v-col>
      <v-col v-if="data.related" tag="section" cols="12">
        <h2>Similar properties</h2>
        <RealEstateList :items="data.related"/>
      </v-col>
      <p v-else>
        Loading...
      </p>
    </v-row>
  </article>
</template>

<style scoped>

</style>
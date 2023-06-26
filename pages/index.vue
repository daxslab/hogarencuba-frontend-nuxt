<script setup lang="ts">
const route = useRoute()


const {data, pending: isPending, refresh, error} = await useHecFetch('/real-estates', {
  query: {
    page: route.query.page || 1,
  },
  onResponse(request, response, options): Promise<void> | void {
    console.log('/real-estates', request, response, options)
  }
})
</script>

<template>
    <RealEstateList
        v-if="!isPending"
        :current-page="parseInt(route.query.page) || 1"
        :items="data.items"
        :page-count="data._meta.pageCount"
    />
    <p v-else>Loading...</p>
</template>

<style scoped>

</style>
<script setup lang="ts">
const {data, pending, refresh, error} = await useHecFetch('/real-estates', {
  onResponse(request, response, options): Promise<void> | void {
    console.log('/real-estates', request, response, options)
  }
})
</script>

<template>
  <RealEstateList v-if="!pending" :items="data.items"/>
  <p v-else>Loading...</p>
</template>

<style scoped>

</style>
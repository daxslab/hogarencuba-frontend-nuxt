<script setup lang="ts">
const config = useRuntimeConfig()

let state = reactive({
  items: [],
})

onMounted(async () => {
  const response = await fetch(`${config.public.HEC_API_HOST}/real-estates`)
  state.items = await response.json()
})
</script>

<template>
  <RealEstateList :items="state.items"/>
</template>

<style scoped>

</style>
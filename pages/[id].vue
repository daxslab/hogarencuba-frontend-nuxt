<script setup lang="ts">

const config = useRuntimeConfig()
const route = useRoute()

let state = reactive({
  item: {}
})

onMounted(async () => {
  console.log(route.params.id);
  const response = await fetch(`${config.public.HEC_API_HOST}/real-estates/${route.params.id}`)
  state.item = await response.json()
  console.log(state.items)
})

</script>

<template>
  {{ JSON.stringify(state.item) }}
</template>

<style scoped>

</style>
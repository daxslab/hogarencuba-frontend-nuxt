<script setup lang="ts">
import {RealEstateItem} from "#components";

const config = useRuntimeConfig()

let state = reactive({
  items: [],
})

onMounted(async () => {
  console.log(state.items)
  const response = await fetch(`${config.public.HEC_API_HOST}/real-estates`)
  state.items = await response.json()
  console.log(state.items)
})

</script>

<template>
  <p>here comes the list</p>
  <ul>
    <RealEstateItem v-for="item in state.items" :key="item.id" :item="item"/>
  </ul>
</template>

<style scoped>

</style>
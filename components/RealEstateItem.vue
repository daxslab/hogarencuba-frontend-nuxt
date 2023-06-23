<script setup lang="ts">
const props = defineProps(['item'])
</script>

<template>
  <article>
    <NuxtLink :to="`/${item.id}`">{{ item.title }}</NuxtLink>
  </article>
</template>

<style scoped>

</style>
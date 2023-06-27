<script setup lang="ts">

defineEmits(['page-changed'])

const props = defineProps({
  meta: {
    type: Object,
    default: function () {
      return {
        totalCount: Number,
        pageCount: Number,
        currentPage: Number,
        perPage: Number,
      }
    }
  }
})

</script>

<template>
  <div v-if="meta">
    <slot/>
    <v-pagination
        v-model="meta.currentPage"
        :length="meta.pageCount"
        @update:model-value="$emit('page-changed', $event)"
    />
  </div>
</template>

<style scoped>

</style>
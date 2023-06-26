<script setup lang="ts">

const props = defineProps({
  items: {
    type: Array,
    default() {
      return []
    }
  },
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
  }
})

const pageChangeRequested = (event) => {
  navigateTo(`?page=${event}`)
}

const dCurrentPage = ref(props.currentPage)

</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col
          v-for="item in items"
          :key="item.id"
          sm="6"
          lg="4"
          xl="3">
        <RealEstateItem :item="item"/>
      </v-col>
    </v-row>
    <v-pagination
        :length="pageCount"
        v-model="dCurrentPage"
        @update:model-value="pageChangeRequested"/>
  </v-container>
</template>

<style scoped>

</style>
<script setup lang="ts">

const props = defineProps({
  items: {
    type: Array,
    default() {
      return []
    }
  },
})

</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="item in items" :key="item.id" cols="12" sm="6" lg="4" xl="3" >
        <RealEstateItem :item="item"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
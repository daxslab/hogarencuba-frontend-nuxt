<script setup lang="ts">
const route = useRoute()

const state = ref({
  page: route.params.page,
  data: null,
  pending: null,
  refresh: null,
  error: null
})

watchEffect(async () => {

  console.log(state.value)

  const {data, pending, refresh, error} = await useHecFetch('/real-estates', {
    query: {
      page: state.page,
    },
    onResponse(request, response, options): Promise<void> | void {
      console.log('/real-estates', request, response, options)
    }
  })

  state.value.data = data
  state.value.pending= pending
})

</script>

<template>
  <PaginatedList
      v-if="!state.pending"
      :meta="state.data ? state.data._meta : null"
      @page-changed="state.page = $event"
  >
    <RealEstateList
        :items="state.data ? state.data.items : []"
    />
  </PaginatedList>
</template>

<style scoped>

</style>
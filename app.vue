<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="HogarEnCuba"></v-app-bar>

    <v-navigation-drawer>
      <RealEstateSearchForm/>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <v-container fluid>
        <NuxtPage/>
      </v-container>
    </v-main>
  </v-layout>
</template>
<script setup>
</script>
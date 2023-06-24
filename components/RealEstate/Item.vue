<script setup lang="ts">

const props = defineProps({
  item: {
    type: Object,
    default() {
      return null
    }
  },
  full: {
    type: Number,
    default: 0,
  }
})

function colorPerPrice(item) {
  let color = 'success';
  if (item.price <= 10000) {
    color = 'secondary';
  } else if (item.price > 10000 && item.price <= 50000) {
    color = 'warning'
  } else if (item.price > 50000 && item.price <= 100000) {
    color = 'info'
  }
  return color;
}

</script>

<template>
  <v-card
      v-if="item"
      tag="article"
      :color="full === 0 ? colorPerPrice(item) : undefined"
      class="fill-height d-flex flex-column">

    <NuxtLink :to="`/${item.id}`">
      <v-img
          :src="item.poster"
          :height="full == 0 ? '300' : 'auto'"
          cover
      />
    </NuxtLink>

    <v-card-item>
      <v-card-title :tag="full == 0 ? 'h2' : 'h1'">
        <NuxtLink :to="`/${item.id}`">{{ item.code }}: {{ item.shortTitle }}</NuxtLink>
      </v-card-title>

      <v-card-subtitle>
        <v-icon icon="mdi-map-marker"></v-icon>
        {{ item.location }}
      </v-card-subtitle>
    </v-card-item>

    <v-card-text tag="p">
      {{ full == 0 ? item.description.slice(0, 300) : item.description }}
    </v-card-text>

    <v-divider/>

    <v-card-actions v-if="full == 0">
      <v-spacer></v-spacer>
      <v-btn :to="`/${item.id}`" variant="elevated">Read More</v-btn>
    </v-card-actions>

    <section v-if="full">
      <v-container>
        <v-row>
          <v-col v-for="image in item.images" :key="image.id" cols="4">
            <v-img
                :src="image.url"
                :lazy-src="image.thumbnail"
                aspect-ratio="1/1"
                cover
                height="300"
                class="bg-grey-lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                  <v-progress-circular
                      indeterminate
                      color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-card>
</template>

<style scoped>
h1 > a,
h2 > a {
  text-decoration: none;
  color: inherit;
}

.v-card .v-card-title{
  line-height: 1.2;
}

.v-card-title > a{
  white-space: normal;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
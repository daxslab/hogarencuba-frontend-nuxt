<script setup lang="ts">

import {Ref, UnwrapRef} from "vue";

const props = defineProps({
  item: {
    type: Object,
    default: null,
  }
})

const contact = reactive({
  name: '',
  email: '',
  subject: props.item ? `About the property ${props.item.code}` : '',
  phone: '',
  message: '',
  itemId: props.item ? props.item.id : null,
})

const processing = ref(false)
const completed = ref(false)

function handleSubmit() {
  console.log('Let\'s send the email')
  processing.value = true
  setTimeout(() => {
    processing.value = false
    completed.value = true
    console.log('Email sent', contact)
  }, 5000)
}

</script>

<template>
  <v-card
      title="Contact Now!"
      subtitle="Get in touch with us"
      :disabled="processing"
      style="position:sticky; top: 5rem"
  >

    <v-sheet
        v-if="completed"
        rounded="lg"
        class="pa-4 text-center mx-auto"
    >
      <v-icon
          class="mb-5"
          color="success"
          icon="mdi-check-circle"
          size="100"
      ></v-icon>

      <h2 class="text-h5 mb-6">Email sent!</h2>

      <p class="mb-4 text-medium-emphasis text-body-2">
        Thanks for contacting us. <br> We'll get back to you as soon as possible.
      </p>
    </v-sheet>
    <v-form v-else @submit.prevent="handleSubmit()" class="px-5 pb-5">
      <v-text-field
          v-model="contact.name"
          label="Name"
          prepend-inner-icon="mdi-account"/>
      <v-text-field
          v-model="contact.email"
          label="Email"
          type="email"
          prepend-inner-icon="mdi-email"/>
      <v-text-field
          v-model="contact.phone"
          label="Phone"
          type="phone"
          placeholder="(Optional)"
          prepend-inner-icon="mdi-phone"/>
      <v-text-field
          v-model="contact.subject"
          label="Subject"
          :readOnly="props.item !== null"
      ></v-text-field>
      <v-textarea v-model="contact.message" label="Your message"></v-textarea>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
            :loading="processing"
            block
            color="success"
            size="large"
            type="submit"
            variant="elevated"
        >
          Send Message
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>

    </v-form>
  </v-card>

</template>

<style scoped>

</style>
<script setup>
defineProps({
  currentUsername: String,
  commentUsername: String,
})
</script>

<template>
  <div v-if="currentUsername === commentUsername">
    <button @click="$emit('delete', true)" class="inline-flex items-center mr-4 font-bold text-soft-red hover:text-pale-red">
      <img class="w-4 mr-2" src="./assets/icon-delete.svg"> Delete
    </button>
    <button @click="$emit('edit', true)" class="inline-flex items-center font-bold text-moderate-blue hover:text-light-grayish-blue">
      <img class="w-4 mr-2" src="./assets/icon-edit.svg"> Edit
    </button>
  </div>

  <button @click="$emit('reply', true)" v-else class="inline-flex items-center font-bold text-moderate-blue hover:text-light-grayish-blue">
    <img class="w-4 mr-2" src="./assets/icon-reply.svg"> Reply
  </button>
</template>
<script setup>
import Card from "./Card.vue";
import Button from "./Button.vue";
import {ref} from "vue";

defineProps({
  currentUsername: String,
  commentUsername: String,
})

const show = ref(false)
</script>

<template>
  <div v-if="currentUsername === commentUsername">
    <button @click="show = true" class="inline-flex items-center mr-4 font-bold text-soft-red hover:text-pale-red">
       <span class="icon-delete mr-2"></span>Delete
    </button>
    <button @click="$emit('edit', true)" class="inline-flex items-center font-bold text-moderate-blue hover:text-light-grayish-blue">
      <span class="icon-edit mr-2"></span> Edit
    </button>
  </div>

  <button @click="$emit('reply', true)" v-else class="inline-flex items-center font-bold text-moderate-blue hover:text-light-grayish-blue">
    <span class="icon-reply mr-2"></span> Reply
  </button>

  <div v-show="show" @click="show = false" class="fixed flex items-center justify-center px-4 top-0 left-0 h-screen w-screen bg-neutral-600/80">
    <Card class="flex-col max-w-sm opacity-100">
      <h2 class="mb-4 text-lg font-bold">Delete Comment</h2>
      <p class="text-grayish-blue">Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
      <div class="flex justify-between mt-4">
        <Button @click="show = false" class="bg-grayish-blue hover:bg-light-gray">no, Cancel</Button>
        <Button @click="$emit('delete', true)" class="bg-soft-red hover:bg-pale-red">yes, delete</Button>
      </div>
    </Card>
  </div>
</template>
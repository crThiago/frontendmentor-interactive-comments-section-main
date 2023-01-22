<script setup>
import { ref } from 'vue'
import Button from './Button.vue';
import Card from "./Card.vue";

defineProps({
  currentUser: Object,
  isReply: Boolean,
})
const emit = defineEmits(['create-comment'])

const reply = ref('')
function doComment() {
  emit('create-comment', reply.value)
  reply.value = ''
}
</script>

<template>
  <Card class="flex flex-wrap items-start sm:flex-nowrap">
    <div class="w-6/12 order-2 sm:order-none sm:w-12">
      <img class="w-10" :src="currentUser.image.webp" alt="Current User Photo">
    </div>
    <textarea
        v-model="reply"
        class="order-1 w-full h-24 px-4 py-3 mb-4 border rounded focus:outline-none focus:border-moderate-blue rounded sm:order-none sm:mx-4"
        placeholder="Add a comment..."
    >
    </textarea>
    <div class="w-6/12 text-end order-2 sm:order-none sm:w-auto">
      <Button @click="doComment">{{ isReply ? 'REPLY' : 'SEND' }}</Button>
    </div>
  </Card>
</template>
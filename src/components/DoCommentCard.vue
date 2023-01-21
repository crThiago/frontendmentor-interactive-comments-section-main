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
  <Card class="flex items-start">
    <img class="w-10" :src="currentUser.image.webp" alt="Current User Photo">
    <textarea
        v-model="reply"
        class="w-full h-24 px-4 py-3 mx-4 border border-grayish-blue rounded"
        placeholder="Add a comment...">
    </textarea>
    <Button @click="doComment">{{ isReply ? 'REPLY' : 'SEND' }}</Button>
  </Card>
</template>
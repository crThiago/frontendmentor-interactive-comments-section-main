<script setup>
import { ref } from 'vue'
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
  <div class="flex items-start mt-3 p-4 rounded-lg bg-white sm:w-card">
    <img class="w-10" :src="currentUser.image.webp" alt="Current User Photo">
    <textarea
        v-model="reply"
        class="w-full h-24 px-4 py-3 mx-4 border border-grayish-blue rounded"
        placeholder="Add a comment...">
    </textarea>
    <button
        @click="doComment"
        class="px-4 py-2 bg-moderate-blue text-white rounded-lg font-semibold"
    >
      {{ isReply ? 'REPLY' : 'SEND' }}
    </button>
  </div>
</template>
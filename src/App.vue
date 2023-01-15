<script setup>
import { ref } from 'vue'
import data from './assets/data.json'
import CommentCard from './components/CommentCard.vue'

const currentUser = data.currentUser
const comments = ref(data.comments)

function deleteComment(id) {
  console.log('debug')
  comments.value = comments.value.filter(comment => comment.id !== id)
}

function deleteReply(id) {
  console.log('debug')
  comments.value = comments.value.map(comment => {
    comment.replies = comment.replies.filter(reply => reply.id !== id)
    return comment
  })
}
</script>

<template>
  <div class="max-w-card mx-auto py-10 px-4 sm:px-0">
    <div v-for="comment in comments" :key="comment.id">
      <CommentCard :comment="comment" :current-user="currentUser" @delete="deleteComment"/>

      <div v-for="reply in comment.replies" :key="reply.id" class="flex">
        <span class="mr-4 border-r-2 sm:mx-10"></span>
        <CommentCard :comment="reply" :current-user="currentUser" @delete="deleteReply" />
      </div>
    </div>
  </div>
</template>

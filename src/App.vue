<script setup>
import { ref } from 'vue'
import data from './assets/data.json'
import CommentCard from './components/CommentCard.vue'
import DoCommentCard from './components/DoCommentCard.vue'

defineEmits(['deleteComment'])

const currentUser = data.currentUser
const comments = ref(data.comments)

function createComment(text) {
  comments.value.push({
    "id": comments.value.length + 1,
    "content": text,
    "createdAt": "now",
    "score": 0,
    "user": {
      ...currentUser,
    },
    "replies": []
  })
}

function deleteComment(id) {
  comments.value = comments.value.filter(comment => comment.id !== id)
}

function deleteReply(id) {
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

      <div v-for="reply in comment.replies" :key="reply.id" class="flex flex-wrap justify-between">
        <span class="w-1/12 border-l-2 sm:w-auto sm:mx-[5%]"></span>
        <CommentCard class="w-11/12 sm:w-[89%]" :comment="reply" :current-user="currentUser" @delete="deleteReply" />
      </div>
    </div>

    <DoCommentCard
      :current-user="currentUser"
      @create-comment="createComment"
    />
  </div>
</template>

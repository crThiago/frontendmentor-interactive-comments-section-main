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
    "id": lastId() + 1,
    "content": text,
    "createdAt": "now",
    "score": 0,
    "user": {
      ...currentUser,
    },
    "replies": []
  })
}

function createReply(id, text) {
  const index = comments.value.findIndex(comment => comment.id === id)
  comments.value[index].replies.push({
    "id": lastId() + 1,
    "content": text,
    "createdAt": "now",
    "score": 0,
    "replyingTo": comments.value[index].user.username,
    "user": {
      ...currentUser,
    }
  })
}

function lastId() {
  let result = 0
  result = comments.value[comments.value.length - 1].id
  comments.value.forEach(comment => {
    if (comment.replies.length > 0 && comment.replies[comment.replies.length - 1].id > result) {
      result = comment.replies[comment.replies.length - 1].id
    }
  })
  return result
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
      <CommentCard
          :comment-id="comment.id"
          :comment="comment"
          :current-user="currentUser"
          @create-reply="createReply"
          @delete="deleteComment"
      />

      <div v-for="reply in comment.replies" :key="reply.id" class="flex flex-wrap justify-between">
        <span class="w-1/12 border-l-2 sm:w-auto sm:mx-[5%]"></span>
        <CommentCard
            class="w-11/12 sm:w-[89%]"
            :comment-id="comment.id"
            :comment="reply"
            :current-user="currentUser"
            @create-reply="createReply"
            @delete="deleteReply"
        />
      </div>
    </div>

    <DoCommentCard
      :current-user="currentUser"
      @create-comment="createComment"
    />
  </div>
</template>

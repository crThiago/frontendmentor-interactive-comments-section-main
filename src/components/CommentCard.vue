<script setup>
import {onMounted, ref} from 'vue'
import CommentControls from "./CommentControls.vue";
import DoCommentCard from "./DoCommentCard.vue";

defineEmits(['delete'])

const props = defineProps({
  comment: Object,
  currentUser: Object
})

const edit = ref(false)
const reply = ref(false)
const currentStore = ref(props.comment.score)

function incrementScore() {
  if (props.comment.score <= currentStore.value && props.comment.user.username !== props.currentUser.username) {
    props.comment.score += 1
  }
}

function decrementScore() {
  if (props.comment.score >= currentStore.value && props.comment.user.username !== props.currentUser.username) {
    props.comment.score -= 1
  }
}

function createReply(text) {
  props.comment.replies.push({
    "id": props.comment.replies.length + 1,
    "content": text,
    "createdAt": "now",
    "score": 0,
    "replyingTo": props.comment.user.username,
    "user": {
      ...props.currentUser,
    }
  })
  reply.value = false
}
</script>

<template>
  <div class="flex flex-col mt-5 p-4 rounded-lg bg-white sm:flex-row-reverse sm:w-card">
    <div class="w-full sm:w-11/12">
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center">
          <img class="w-8 mr-3.5" :src="comment.user.image.webp">
          <span class="mr-2 font-bold">{{ comment.user.username }}</span>
          <span
              v-if="currentUser.username === comment.user.username"
              class="px-2 py-0.5 mr-2 text-xs bg-moderate-blue text-white font-bold rounded-sm"
          >
            you
          </span>
          <span class="ml-2 text-grayish-blue">{{ comment.createdAt }}</span>
        </div>

        <div class="hidden sm:block">
          <CommentControls
              :current-username="currentUser.username"
              :comment-username="comment.user.username"
              @edit="edit = true"
              @delete="$emit('delete', comment.id)"
              @reply="reply = !reply"
          />
        </div>
      </div>
      <div class="mb-4 sm:mb-0">
        <p v-show="!edit" class="text-grayish-blue mb-4">
          <span
              v-if="comment.replyingTo"
              class="font-bold text-moderate-blue"
          >
            @{{ comment.replyingTo }}
          </span>
          {{ comment.content }}
        </p>
        <div v-if="currentUser.username === comment.user.username" v-show="edit" class="text-right">
          <textarea
              v-model="comment.content"
              class="w-full h-24 px-4 py-3 mb-4 border border-grayish-blue rounded"
              placeholder="Edit your comment..."
          />
          <button @click="edit = false" class="px-4 py-2 bg-moderate-blue text-white rounded-lg font-semibold">UPDATE</button>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between sm:mr-6 sm:items-start">
      <div class="inline-flex rounded-lg bg-light-gray sm:flex-col">
        <button @click="incrementScore" class="flex justify-center px-3 py-2 text-light-grayish-blue hover:text-moderate-blue">
          <img class="w-3" src="./assets/icon-plus.svg">
        </button>
        <span class="w-10 px-3 py-2 text-center text-moderate-blue">{{ comment.score }}</span>
        <button @click="decrementScore" class="flex justify-center px-3 py-2 text-light-grayish-blue hover:text-moderate-blue">
          <img class="w-3" src="./assets/icon-minus.svg">
        </button>
      </div>
      <div class="block sm:hidden">
        <CommentControls
            :current-username="currentUser.username"
            :comment-username="comment.user.username"
            @edit="edit = true"
            @delete="$emit('delete', comment.id)"
            @reply="reply = !reply"
        />
      </div>
    </div>
  </div>

  <DoCommentCard
      v-if="reply"
      is-reply
      :currentUser="currentUser"
      @create-comment="createReply"
  />
</template>
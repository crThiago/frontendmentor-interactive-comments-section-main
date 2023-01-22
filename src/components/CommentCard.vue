<script setup>
import { ref } from 'vue'
import CommentControls from "./CommentControls.vue";
import DoCommentCard from "./DoCommentCard.vue";
import Button from "./Button.vue";
import Card from "./Card.vue";

const emits = defineEmits(['create-reply', 'delete'])

const props = defineProps({
  commentId: Number,
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
  emits('create-reply', props.commentId, text)
  reply.value = false
}
</script>

<template>
  <div>
    <Card class="flex-col sm:flex-row-reverse">
      <div class="w-full sm:w-11/12">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <img class="w-8 mr-3.5" :src="comment.user.image.webp" alt="user avatar">
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
                @edit="edit = !edit"
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
                class="w-full h-24 px-4 py-3 mb-4 border rounded focus:outline-none focus:border-moderate-blue rounded"
                placeholder="Edit your comment..."
            />
            <Button @click="edit = false">Update</Button>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between sm:mr-6 sm:items-start">
        <div class="inline-flex rounded-lg bg-light-gray sm:flex-col">
          <button
              @click="incrementScore"
              class="flex justify-center px-3 py-2 text-light-grayish-blue hover:text-moderate-blue icon-plus"
          >
          </button>
          <span class="w-10 px-3 py-2 text-center text-moderate-blue">{{ comment.score }}</span>
          <button
              @click="decrementScore"
              class="flex justify-center px-3 py-2 text-light-grayish-blue hover:text-moderate-blue icon-minus"
          >
          </button>
        </div>
        <div class="block sm:hidden">
          <CommentControls
              :current-username="currentUser.username"
              :comment-username="comment.user.username"
              @edit="edit = !edit"
              @delete="$emit('delete', comment.id)"
              @reply="reply = !reply"
          />
        </div>
      </div>
    </Card>

    <DoCommentCard
        v-if="reply"
        is-reply
        :currentUser="currentUser"
        @create-comment="createReply"
    />
  </div>
</template>
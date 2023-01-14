<script setup>
defineProps({
  comment: Object,
  currentUser: Object
})
</script>

<template>
  <div class="flex flex-col mb-5 p-4 rounded-lg bg-white sm:flex-row-reverse">
    <div>
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center">
          <img class="w-8 mr-3.5" :src="comment.user.image.webp">
          <span class="mr-2 font-bold">{{ comment.user.username }}</span>
          <span v-if="currentUser.username === comment.user.username" class="px-2 py-0.5 mr-2 text-xs bg-moderate-blue text-white font-bold rounded-sm">you</span>
          <span class="ml-2 text-grayish-blue">{{ comment.createdAt }}</span>
        </div>

        <div class="hidden sm:block">
          <div v-if="currentUser.username === comment.user.username">
            <button class="inline-flex items-center mr-4 font-bold text-soft-red hover:text-pale-red">
              <img class="w-4 mr-2" src="./assets/icon-delete.svg"> Delete
            </button>
            <button class="inline-flex items-center font-bold text-moderate-blue hover:text-light-grayish-blue">
              <img class="w-4 mr-2" src="./assets/icon-edit.svg"> Edit
            </button>
          </div>

          <button v-else class="inline-flex items-center font-bold text-moderate-blue hover:text-light-grayish-blue">
            <img class="w-4 mr-2" src="./assets/icon-reply.svg"> Reply
          </button>
        </div>
      </div>
      <p class="text-grayish-blue mb-4">{{ comment.content }}</p>
    </div>

    <div class="mr-6">
      <div class="inline-flex rounded-lg bg-light-gray sm:flex-col">
        <button class="flex justify-center px-3 py-2 text-light-grayish-blue hover:text-moderate-blue">
          <img class="w-3" src="./assets/icon-plus.svg">
        </button>
        <span class="w-10 px-3 py-2 text-center text-moderate-blue">{{ comment.score }}</span>
        <button class="flex justify-center px-3 py-2 text-light-grayish-blue hover:text-moderate-blue">
          <img class="w-3" src="./assets/icon-minus.svg">
        </button>
      </div>
    </div>
  </div>
</template>
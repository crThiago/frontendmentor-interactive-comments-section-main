<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="py-10 px-4 sm:px-0">
    <div class="flex flex-col max-w-card mx-auto p-4 rounded-lg bg-white sm:flex-row-reverse">
      <div>
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <img class="w-8 mr-3.5" src="./assets/avatars/image-amyrobson.webp">
            <span class="mr-2 font-bold">amyrobson</span>
            <span class="px-2 py-0.5 text-xs bg-moderate-blue text-white font-bold rounded-sm">you</span>
            <span class="ml-4 text-grayish-blue">1 month ago</span>
          </div>

          <div class="hidden sm:block">
            <button class="inline-flex items-center mr-4 font-bold text-soft-red hover:text-pale-red">
              <img class="w-4 mr-2" src="./assets/icon-delete.svg"> Delete
            </button>
            <button class="inline-flex items-center font-bold text-moderate-blue hover:text-light-grayish-blue">
              <img class="w-4 mr-2" src="./assets/icon-edit.svg"> Edit
            </button>

            <button class="inline-flex items-center font-bold text-moderate-blue hover:text-light-grayish-blue">
              <img class="w-4 mr-2" src="./assets/icon-reply.svg"> Reply
            </button>
          </div>
        </div>
        <p class="text-grayish-blue mb-4">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.
          You've nailed the design and the responsiveness at various breakpoints works really well.</p>
      </div>

      <div class="mr-6">
        <div class="inline-flex rounded-lg bg-light-gray sm:flex-col">
          <button class="flex justify-center px-3 py-2 text-light-grayish-blue hover:text-moderate-blue">
            <img class="w-3" src="./assets/icon-plus.svg">
          </button>
          <span class="px-3 py-2 text-center text-moderate-blue">12</span>
          <button class="flex justify-center px-3 py-2 text-light-grayish-blue hover:text-moderate-blue">
            <img class="w-3" src="./assets/icon-minus.svg">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<template>
  <button
      @click="$emit('click')"
      class="px-4 py-2 bg-moderate-blue uppercase text-white rounded-lg font-semibold"
  >
    <slot />
  </button>
</template>

<template>
  <button
    type="button"
    @click="$emit('click')"
    class="absolute z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    :class="side === 'left' ? 'top-0 start-0' : 'top-0 end-0'"
    :style="side === 'left' ? 'left:0;' : 'right:0;'"
  >
    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg v-if="side === 'left'" class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
      </svg>
      <svg v-else class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
      </svg>
      <span class="sr-only">{{ side === 'left' ? 'Previous' : 'Next' }}</span>
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps<{ side: 'left' | 'right' }>()
</script>

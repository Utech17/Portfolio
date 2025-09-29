<template>
  <div class="flex flex-col items-center p-3 md:p-4 rounded-lg w-[75px] sm:w-[85px] md:w-[100px] h-[75px] sm:h-[85px] md:h-[100px] justify-center">
    <component :is="icon" class="w-10 h-10 md:w-12 md:h-12 text-white" />
    <span class="text-white text-xs sm:text-sm md:text-base mt-1 text-center">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: Object,
  label: String,
});
</script>
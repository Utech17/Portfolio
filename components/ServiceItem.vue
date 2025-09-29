<template>
  <li class="service-item">
    <div class="service-icon-box">
      <component :is="service.icon" class="w-10 h-10 md:w-12 md:h-12" />
    </div>

    <div class="service-content-box">
      <h4 class="h4 service-item-title">
        {{ service.title }}
      </h4>

      <p class="service-item-text">
        {{ service.description }}
      </p>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  service: Object,
})
</script>
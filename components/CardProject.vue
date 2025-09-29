<template>
  <div class="project-carousel" @click="handleClick">
    <div class="carousel-image">
      <img :src="images[0]" :alt="title" />
    </div>
    <div class="carousel-content">
      <h2 class="carousel-title">{{ title }}</h2>
      <p class="carousel-desc">{{ description.length > 20 ? description.slice(0, 20) + '...' : description }}</p>
      <div class="carousel-icons">
        <slot name="icons" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: { type: Array, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  github: { type: String, required: true },
  onClick: { type: Function, default: null }
})
const images = computed(() => props.images)
const title = computed(() => props.title)
const description = computed(() => props.description)
const github = computed(() => props.github)
function handleClick() {
  if (props.onClick) props.onClick()
}
</script>

<style scoped>
.project-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: var(--eerie-black-2, #222);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  padding: 1.5rem;
  max-width: 480px;
  cursor: pointer;
}
.carousel-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.carousel-image {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
}
.carousel-image img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: none;
}
.carousel-btn {
  background: var(--vegas-gold, #FFD700);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.5rem;
  color: #222;
  cursor: pointer;
  transition: background 0.2s;
}
.carousel-btn:hover {
  background: #e6c200;
}
.carousel-content {
  text-align: center;
}
.carousel-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--white-2, #fff);
}
.carousel-desc {
  font-size: 1rem;
  color: var(--light-gray, #ccc);
  margin-bottom: 1rem;
}
.carousel-icons {
  margin-bottom: 1rem;
}
.carousel-github-btn {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: #222;
  color: #FFD700;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s;
}
.carousel-github-btn:hover {
  background: #FFD700;
  color: #222;
}
</style>

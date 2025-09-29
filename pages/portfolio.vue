<template>
  <article class="portfolio active" data-page="portfolio">
    <header>
      <h2 class="h2 article-title">
        Portafolio
      </h2>
    </header>

    <section class="projects">
      <ul class="filter-list">
        <li class="filter-item">
          <button :class="{ active: activeCategory === 0 }" @click="changeFilter(0)">
            All
          </button>
        </li>

        <li v-for="category in categories" :key="category.id" class="filter-item" @click="changeFilter(category.id)">
          <button :class="{ active: activeCategory === category.id }">
            {{ category.title.en }}
          </button>
        </li>
      </ul>

      <div class="filter-select-box">
        <button :class="{ active: filterMenu }" class="filter-select" @click="filterMenu = !filterMenu">
          <div class="select-value">
            {{ activeCategory !== 0 ? activeCategoryName?.en : 'Select Category' }}
          </div>

          <div class="select-icon">
            <ion-icon name="chevron-down" />
          </div>
        </button>

        <ul class="select-list">
          <li class="select-item">
            <button @click="changeFilter(0)">
              All
            </button>
          </li>

          <li v-for="category in categories" :key="category.id" class="select-item">
            <button @click="changeFilter(category.id)">
              {{ category.title.en }}
            </button>
          </li>
        </ul>
      </div>

      <ul class="project-list-grid">
        <li v-for="project in projectList" :key="project.id" :class="{ active: activeCategory === project.category.id || activeCategory === 0 }" class="project-item" style="display:flex; align-items:center; justify-content:center;">
          <CardProject
            :images="project.images"
            :title="project.title"
            :description="project.description"
            :github="project.github"
            :onClick="() => openModal(project)"
            style="width:400px; min-height:320px;"
          />
        </li>
      </ul>

      <div v-if="showModal" class="carousel-modal">
        <div class="carousel-modal-overlay" @click="closeModal" />
        <div class="carousel-modal-content info-content about-text">
          <button class="carousel-modal-close" @click="closeModal">&times;</button>
          <div class="carousel-wrapper">
            <div class="carousel-image">
              <div style="position:relative; display:inline-block; width:700px; height:420px;">
                <img
                  :src="activeProject.images[currentImage]"
                  :alt="activeProject.title"
                  class="modal-img"
                  @click="next"
                  @contextmenu.prevent="prev"
                  style="width:100%; height:100%; display:block; border-radius:16px; box-shadow:0 4px 24px rgba(0,0,0,0.35);"
                />
                <BtnNext-Prev side="left" @click="prev" style="position:absolute; top:50%; left:10px; transform:translateY(-50%);" />
                <BtnNext-Prev side="right" @click="next" style="position:absolute; top:50%; right:10px; transform:translateY(-50%);" />
              </div>
            </div>
          </div>
          <div class="carousel-content">
            <center><h1 class="name">{{ activeProject.title }}</h1></center>
            <p class="carousel-desc">{{ activeProject.description }}</p>
            <center v-if="activeProject.github && activeProject.github.trim() !== ''">
              <BtnLink :link="activeProject.github" target="_blank" label="Ver en GitHub" class="carousel-github-btn"/>
            </center>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref } from 'vue'
const showModal = ref(false)
const activeProject = ref({ images: [], title: '', description: '', github: '' })
const currentImage = ref(0)
function openModal(project) {
  activeProject.value = project
  currentImage.value = 0
  showModal.value = true
}
function closeModal() {
  showModal.value = false
}
function next() {
  currentImage.value = (currentImage.value + 1) % activeProject.value.images.length
}
function prev() {
  currentImage.value = (currentImage.value - 1 + activeProject.value.images.length) % activeProject.value.images.length
}

const categories = ref([
  { id: 1, title: { en: 'Web' } },
  { id: 2, title: { en: 'Escritorio' } }
])

const activeCategory = ref(0)
const filterMenu = ref(false)
const activeCategoryName = ref('')

function changeFilter(id) {
  activeCategory.value = id
  if (id !== 0)
    activeCategoryName.value = categories.value.find(item => item.id === id).title
  filterMenu.value = !filterMenu.value
}

const projectList = computed(() => {
  if (activeCategory.value === 0) return projects.value
  return projects.value.filter(p => p.category.id === activeCategory.value)
})
const projects = ref([
  {
    id: 1,
    images: ['/Fiscor/1.jpeg', '/Fiscor/2.jpeg', '/Fiscor/3.jpeg', '/Fiscor/4.jpeg', '/Fiscor/5.jpeg', '/Fiscor/6.jpeg'],
    title: 'Fiscor',
    category: { id: 1, title: 'Web' },
    description: 'El sistema de control de gastos es una herramienta diseñada para ayudar a empresas e Instituciones Educativas a gestionar y supervisar sus gastos de manera eficiente y precisa. ',
    github: 'https://github.com/Utech17/Fiscor'
  },
  {
    id: 2,
    images: ['/sgbi/sgbi.jpeg'],
    title: 'Sistema de Gestión de Bienes Integral',
    category: { id: 1, title: 'Web' },
    description: 'Optimización y desarrollo de funcionalidades con TypeScript, NestJS, Prisma, Mejora de rendimiento con vistas y procedimientos en PostgreSQL, Implementación de seguridad con decoradores, guards y JWT.',
  }
])
</script>

<style scoped>
/* Grid de proyectos responsivo */
.project-list-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  align-items: stretch;
}
@media (max-width: 900px) {
  .project-list-grid {
    grid-template-columns: 1fr;
  }
}
.carousel-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2147483647;
  background: rgba(0,0,0,0.8);
  animation: modalFadeIn 0.3s;
}
.carousel-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 2147483646;
}
.carousel-modal-content {
  position: relative;
  background: #222;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.35);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  z-index: 2147483648;
  min-width: 900px;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-img {
  width: 1100px;
  height: 660px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.35);
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.modal-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(34,34,34,0.8);
  border: none;
  color: #fff;
  font-size: 1.8rem;
  padding: 0.3rem 0.7rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2147483650;
}
.carousel-btn.left.modal-btn {
  left: 10px;
  top: 170px;
}
.carousel-btn.right.modal-btn {
  right: 10px;
  top: 170px;
}
.carousel-btn.left.modal-btn:hover {
  color: hsl(221, 90%, 51%);;
}
.carousel-btn.right.modal-btn:hover {
  color: hsl(221, 90%, 51%);;
}
.carousel-modal-close {
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  font-size: 2.2rem;
  color: #fff;
  cursor: pointer;
  z-index: 2147483649;
  transition: color 0.2s;
}
.carousel-modal-close:hover {
  color: hsl(221, 90%, 51%);;
}
@keyframes modalFadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>
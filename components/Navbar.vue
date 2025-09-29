<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link">
          Acerca de mí
        </NuxtLink>
      </li>
      <li class="navbar-item">
        <NuxtLink to="/resume" class="navbar-link">
          Resumen
        </NuxtLink>
      </li>
      <li class="navbar-item">
        <NuxtLink to="/portfolio" class="navbar-link">
          Portafolio
        </NuxtLink>
      </li>
      <li class="navbar-item">
        <NuxtLink to="/contact" class="navbar-link">
          Contacto
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style scoped>
  a.router-link-active {
    font-weight: bold;
  }
  a.router-link-exact-active {
    color: var(--vegas-gold);
  }
</style>

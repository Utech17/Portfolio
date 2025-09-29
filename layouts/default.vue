<template>
    <main class="relative">
      <Sidebar />
      <div class="main-content">
        <Navbar />
        <slot />
      </div>
    </main>
</template>

<script setup>
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle = 'Utech17 - Desarrollador'
  },
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/icon.png',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap',
      crossorigin: '',
    },
  ],
  script: [
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
      body: false,
      type: 'module',
    },
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
      body: false,
      nomodule: true,
    },
  ],
})
</script>
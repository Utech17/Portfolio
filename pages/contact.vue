<template>
  <article class="contact active" data-page="contact">
    <header>
      <h2 class="h2 article-title">
  Contacto
      </h2>
    </header>

    <section class="contact-form">
      <h3 class="h3 form-title">
        Formulario de Contacto
      </h3>

  <form :action="`https://formspree.io/f/${formspreeId}`" method="POST" class="form" data-form>
        <div class="input-wrapper">
          <input type="text" name="fullname" class="form-input" placeholder="Nombre completo" required data-form-input>
          <input
            type="email" name="email" class="form-input" placeholder="Dirección de correo electrónico" required
            data-form-input
          >
        </div>
        <textarea name="message" class="form-input" placeholder="Tu mensaje" required data-form-input />
        <button class="form-btn" type="submit" data-form-btn>
          <ion-icon name="paper-plane" />
          <span>Enviar mensaje</span>
        </button>
      </form>
    </section>
  </article>
</template>

<script setup>
const formspreeId = process.env.FORMSPREE_ID || 'codigo_formspree'
</script>
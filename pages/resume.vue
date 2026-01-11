<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        Resumen
      </h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          Educación
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Instituto Universitario Jesus Obrero
          </h4>

          <span>2023 — 2025</span>

          <p class="timeline-text">
            T.S.U. en Informática
          </p>
        </li>
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          Experiencia Profesional
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Alcaldía de Iribarren
          </h4>

          <span>Mayo 2025 - Diciembre 2025</span>
          
          <ul>
            <li>
              <p class="timeline-text">
                Desarrollé el backend para la generación automática de informes técnicos en PDF, 
                asegurando calidad y seguridad de datos con validaciones y DTOs. Implementé generación 
                dinámica con PDFKit y mejoré el Sistema de Gestión de Bienes Integral para optimizar recursos. 
                Refactoricé para lograr mayor mantenibilidad y escalabilidad.
              </p>
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">
        Idiomas y herramientas
      </h3>

      <div class="skills-list content-card">
        <technologies-section/>
      </div>
    </section>
  </article>
</template>

<script setup>
</script>
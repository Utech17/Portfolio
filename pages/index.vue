<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        Hola, soy Miguel.
      </h2>
    </header>

    <section class="about-text">
      <p>
        Soy un desarrollador backend apasionado por la informática, con conocimientos sólidos en 
        <strong>aplicaciones, redes y servidores web</strong>. Me motiva crear soluciones eficientes y escalables, 
        siempre enfocado en aportar valor real a los proyectos en los que participo. Disfruto trabajar en equipo, 
        compartir ideas y contribuir activamente al desarrollo de nuevas propuestas, asumiendo cada reto con 
        responsabilidad y compromiso.
      </p>

      <p>
        Mi enfoque profesional está orientado hacia la <strong>mejora continua</strong>, la innovación y la 
        <strong>excelencia técnica</strong>. Me caracterizo por mantener un fuerte sentido ético y profesional, 
        fomentando la confianza y la colaboración dentro de los equipos. Estas cualidades me permiten integrarme 
        de forma efectiva en distintos entornos de trabajo y aportar soluciones que faciliten el logro de los 
        objetivos planteados.
      </p>

      <p>
        Además, tengo un interés constante por ampliar mis habilidades y conocimientos, manteniéndome actualizado 
        en nuevas tecnologías y buenas prácticas del desarrollo backend. Mi meta es seguir creciendo como 
        profesional, contribuyendo en proyectos que representen un impacto positivo y que ofrezcan desafíos 
        significativos.
      </p>
    </section>

    <section class="service">
      <h3 class="h3 service-title">
        ¿Qué estoy haciendo?
      </h3>

      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>
  </article>
</template>

<script setup>
import IconNestjs from '@/components/icons/IconNestjs.vue';
import IconFedora from '@/components/icons/IconFedora.vue';
const services = ref([
  {
    id: 1,
    title: 'NestJS',
    description:'Framework para la creación de aplicaciones web modernas. Bajo el concepto de modularidad, porque me permite organizar la aplicación en módulos independientes, fáciles de mantener y escalar.',
    icon: IconNestjs
  },
  {
    id: 2,
    title: 'Fedora',
    description: 'En mis proyectos trabajo con Linux, porque me permite tener un entorno estable, seguro y flexible para desarrollar, probar y desplegar aplicaciones de manera eficiente.',
    icon: IconFedora
  },
])
</script>
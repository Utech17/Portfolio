<template>
  <section>
    <div class="w-full flex flex-wrap justify-start items-center gap-4 sm:gap-8">
      <TechnologyItem
        v-for="(tech, index) in technologies"
        :key="index"
        :icon="tech.icon"
        :label="tech.label"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import IconLinux from '@/components/icons/IconLinux.vue';
import IconNestjs from '@/components/icons/IconNestjs.vue';
import IconTypeScript from '@/components/icons/IconTypeScript.vue';
import IconGit from '@/components/icons/IconGit.vue';
import IconPhp from '@/components/icons/IconPhp.vue';
import IconPostgresql from '@/components/icons/IconPostgresql.vue';
import IconMysql from '@/components/icons/IconMysql.vue';
import IconDocker from '@/components/icons/IconDocker.vue';
import IconJavaScript from '@/components/icons/IconJavaScript.vue';
import IconTrello from '@/components/icons/IconTrello.vue';
import IconBash from '@/components/icons/IconBash.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconPrisma from '@/components/icons/IconPrisma.vue';

const technologies = [
  { icon: IconLinux, label: 'Linux' },
  { icon: IconNestjs, label: 'NestJS' },
  { icon: IconTypeScript, label: 'TypeScript' },
  { icon: IconGit, label: 'Git' },
  { icon: IconPhp, label: 'PHP' },
  { icon: IconPostgresql, label: 'PostgreSQL' },
  { icon: IconMysql, label: 'MySQL' },
  { icon: IconDocker, label: 'Docker' },
  { icon: IconJavaScript, label: 'JavaScript' },
  { icon: IconTrello, label: 'Trello' },
  { icon: IconBash, label: 'Bash' },
  // { icon: IconGitHub, label: 'GitHub' },
  { icon: IconPrisma, label: 'Prisma' },
];
</script>

<template>
  <div class="mx-auto flex max-w-screen-xl px-4">
    <aside class="mt-6 hidden w-64 flex-col gap-4 lg:flex">
      <div v-for="docsGroup in docsConfig.sidebarNav" :key="docsGroup.title">
        <h3 class="text-sm font-bold">
          {{ docsGroup.title }}
        </h3>
        <div v-for="doc in docsGroup.items" :key="doc.title" class="ml-2">
          <a v-if="doc.href" :href="doc.href" class="text-sm">
            {{ doc.title }}
          </a>
        </div>
      </div>
    </aside>
    <main class="mt-8 flex-1 px-8 lg:ml-12">
      <p class="text-brand-primary font-medium capitalize">
        {{ componentType }}
      </p>
      <h1 class="text-3xl font-bold">{{ frontmatter.title }}</h1>
      <p class="text-brand-gray-1100 text-lg">{{ frontmatter.description }}</p>
      <div class="vp-doc">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { useData, useRoute } from 'vitepress'
  import { docsConfig } from '../config/docs'

  const route = useRoute()
  const { frontmatter } = useData()

  const componentType = route.path.split('/').at(-2)
</script>

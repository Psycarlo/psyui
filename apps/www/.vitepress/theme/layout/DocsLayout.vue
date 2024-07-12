<template>
  <div class="mx-auto flex max-w-screen-xl px-8">
    <aside
      class="mt-6 hidden w-60 min-w-[240px] flex-col gap-4 border-r border-slate-200 lg:flex"
    >
      <div v-for="docsGroup in docsConfig.sidebarNav" :key="docsGroup.title">
        <h3 class="text-sm font-bold">
          {{ docsGroup.title }}
        </h3>
        <ul class="ml-2 mt-2">
          <li
            v-for="doc in docsGroup.items"
            :key="doc.title"
            class="border-l-2 py-1.5 pl-4 text-sm"
            :class="[
              route.path === `${doc.href}`
                ? 'border-brand-primary'
                : 'border-slate-200'
            ]"
          >
            <a
              v-if="doc.href"
              :href="doc.label !== 'Soon' ? doc.href : undefined"
              class="inline-flex items-center gap-3"
              :class="{
                'text-brand-primary': route.path === `${doc.href}`,
                'opacity-35': doc.label === 'Soon'
              }"
            >
              {{ doc.title }}
              <div
                v-if="doc.label"
                class="bg-brand-primaryLight/10 text-brand-primary rounded-md px-1.5 py-0.5 text-xs"
              >
                {{ doc.label }}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <main class="mt-8 max-w-4xl flex-1 lg:ml-12 lg:px-4">
      <div class="flex flex-col gap-3">
        <p class="text-brand-primary font-medium capitalize">
          {{ subtitle }}
        </p>
        <h1 class="text-3xl font-bold">{{ frontmatter.title }}</h1>
        <p class="text-brand-gray-1000 text-lg">
          {{ frontmatter.description }}
        </p>
      </div>
      <ul
        v-if="!route.path.includes('getting-started')"
        class="mt-6 flex gap-3 border-b border-slate-200 px-1 py-2"
      >
        <li v-if="frontmatter.title">
          <ExternalLink
            :href="`https://github.com/Psycarlo/psyui/blob/main/apps/www/src/lib/registry/ui/${frontmatter.title.replaceAll(' ', '')}.vue`"
          >
            Github
          </ExternalLink>
        </li>
        <li v-if="frontmatter.primitive">
          <ExternalLink :href="frontmatter.primitive"> Primitive </ExternalLink>
        </li>
        <li v-if="frontmatter.inspiration">
          <ExternalLink :href="frontmatter.inspiration">
            Inspiration
          </ExternalLink>
        </li>
      </ul>
      <div class="vp-doc mb-12 mt-6">
        <slot />
      </div>
      <EditLink />
    </main>
  </div>
</template>

<script setup lang="ts">
  import { watch, ref } from 'vue'
  import { useData, useRoute } from 'vitepress'
  import { docsConfig } from '../config/docs'
  import EditLink from '../components/EditLink.vue'
  import ExternalLink from '../components/ExternalLink.vue'

  const route = useRoute()
  const { frontmatter } = useData()

  const subtitle = ref(computeSubtitle())

  function computeSubtitle() {
    return route.path.split('/').at(-2)?.replaceAll('-', ' ') || ''
  }

  watch(route, (route) => {
    subtitle.value = route.path.split('/').at(-2)?.replaceAll('-', ' ') || ''
  })
</script>

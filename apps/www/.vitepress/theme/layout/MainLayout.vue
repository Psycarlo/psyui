<template>
  <div class="font-brand">
    <Announcement />
    <header class="border-b border-gray-200">
      <nav
        class="mx-auto flex max-w-screen-xl items-center justify-between px-8 py-4"
      >
        <Logo />
        <div class="flex items-center gap-6">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a href="/docs/getting-started/introduction" class="font-medium">
                Docs
              </a>
            </li>
            <li>
              <a href="/components" class="font-medium">Components </a>
            </li>
          </ul>
          <div class="h-6 border-l"></div>
          <a
            :href="siteConfig.links.github"
            target="_blank"
            class="inline-flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 19.516"
              class="h-5 w-5"
            >
              <path
                d="M12,2A10.007,10.007,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31c-2.77.6-3.36-1.34-3.36-1.34A2.69,2.69,0,0,0,5.03,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1.03,2.148,2.148,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92A3.873,3.873,0,0,1,6.65,8.79a3.577,3.577,0,0,1,.1-2.64s.84-.27,2.75,1.02a9.635,9.635,0,0,1,5,0c1.91-1.29,2.75-1.02,2.75-1.02a3.577,3.577,0,0,1,.1,2.64,3.873,3.873,0,0,1,1.03,2.71c0,3.82-2.34,4.66-4.57,4.91a2.386,2.386,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10.009,10.009,0,0,0,12,2"
                transform="translate(-2 -2)"
              />
            </svg>
            <span class="text-sm font-medium">
              {{ numberFormatter.format(repoStars) }}
            </span>
          </a>
        </div>
      </nav>
    </header>
    <div>
      <component :is="'docs'" v-if="$route.path.includes('docs')">
        <Content :key="$route.path" />
      </component>
      <div v-else>
        <Content :key="$route.path" />
      </div>
    </div>
    <footer class="mt-20 border-t border-gray-200 py-10">
      <nav class="mx-auto flex max-w-screen-xl flex-col px-4">
        <div class="flex flex-col gap-2">
          <h3 class="font-medium">Inspiration</h3>
          <a href="https://www.shadcn-vue.com/" target="_blank" class="text-sm">
            shadcn-vue
          </a>
          <a href="https://magicui.design/" target="_blank" class="text-sm">
            magic ui
          </a>
          <a href="https://www.tremor.so/" target="_blank" class="text-sm">
            tremor
          </a>
          <a href="https://nextui.org/" target="_blank" class="text-sm">
            next ui
          </a>
          <a href="https://ui.aceternity.com/" target="_blank" class="text-sm">
            aceternity ui
          </a>
          <a href="https://www.hover.dev/" target="_blank" class="text-sm">
            hover.dev
          </a>
        </div>
        <hr class="my-12" />
        <div class="flex items-center justify-between">
          <p class="text-sm">© 2024 psyui</p>
          <ul class="flex items-center gap-2">
            <li>
              <a :href="siteConfig.links.github" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 19.516"
                  class="h-5 w-5"
                >
                  <path
                    d="M12,2A10.007,10.007,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31c-2.77.6-3.36-1.34-3.36-1.34A2.69,2.69,0,0,0,5.03,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1.03,2.148,2.148,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92A3.873,3.873,0,0,1,6.65,8.79a3.577,3.577,0,0,1,.1-2.64s.84-.27,2.75,1.02a9.635,9.635,0,0,1,5,0c1.91-1.29,2.75-1.02,2.75-1.02a3.577,3.577,0,0,1,.1,2.64,3.873,3.873,0,0,1,1.03,2.71c0,3.82-2.34,4.66-4.57,4.91a2.386,2.386,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10.009,10.009,0,0,0,12,2"
                    transform="translate(-2 -2)"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { siteConfig } from '../config/site'
  import { Content, useRoute, useData } from 'vitepress'
  import Announcement from '../components/Announcement.vue'
  import Logo from '../components/Logo.vue'
  import { ref, onMounted } from 'vue'

  const $route = useRoute()
  const { frontmatter } = useData()

  const repoStars = ref(0)
  const loading = ref(false)

  const numberFormatter = Intl.NumberFormat('en', { notation: 'compact' })

  onMounted(async () => {
    loading.value = true
    try {
      const response = await fetch(
        'https://api.github.com/repos/Psycarlo/psyui'
      )
      const psyuiRepo = await response.json()

      if (
        psyuiRepo?.stargazers_count &&
        typeof psyuiRepo.stargazers_count === 'number'
      )
        repoStars.value = psyuiRepo.stargazers_count
    } catch (err) {
    } finally {
      loading.value = false
    }
  })
</script>

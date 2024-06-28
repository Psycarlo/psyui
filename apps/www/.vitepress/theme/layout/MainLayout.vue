<template>
  <div class="font-brand">
    <Announcement />
    <header class="border-b border-gray-200" id="top">
      <nav
        class="mx-auto flex max-w-screen-xl items-center justify-between px-8 py-4"
      >
        <Logo />
        <div class="flex items-center gap-4 sm:gap-6">
          <ul class="flex items-center gap-4 text-sm sm:gap-6">
            <li>
              <a href="/docs/getting-started/introduction" class="font-medium">
                <span class="hidden sm:inline-block">Docs</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#000000"
                  fill="none"
                  class="sm:hidden"
                >
                  <path
                    d="M15 2.5V4C15 5.41421 15 6.12132 15.4393 6.56066C15.8787 7 16.5858 7 18 7H19.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14.1716C14.5803 2 14.7847 2 14.9685 2.07612C15.1522 2.15224 15.2968 2.29676 15.5858 2.58579L19.4142 6.41421C19.7032 6.70324 19.8478 6.84776 19.9239 7.03153C20 7.2153 20 7.41968 20 7.82843V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 11H16M8 14H16M8 17H12.1708"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="/components" class="font-medium">
                <span class="hidden sm:inline-block">Components</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#000000"
                  fill="none"
                  class="sm:hidden"
                >
                  <path
                    d="M8.64298 3.14559L6.93816 3.93362C4.31272 5.14719 3 5.75397 3 6.75C3 7.74603 4.31272 8.35281 6.93817 9.56638L8.64298 10.3544C10.2952 11.1181 11.1214 11.5 12 11.5C12.8786 11.5 13.7048 11.1181 15.357 10.3544L17.0618 9.56638C19.6873 8.35281 21 7.74603 21 6.75C21 5.75397 19.6873 5.14719 17.0618 3.93362L15.357 3.14559C13.7048 2.38186 12.8786 2 12 2C11.1214 2 10.2952 2.38186 8.64298 3.14559Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.788 11.0972C20.9293 11.2959 21 11.5031 21 11.7309C21 12.7127 19.6873 13.3109 17.0618 14.5072L15.357 15.284C13.7048 16.0368 12.8786 16.4133 12 16.4133C11.1214 16.4133 10.2952 16.0368 8.64298 15.284L6.93817 14.5072C4.31272 13.3109 3 12.7127 3 11.7309C3 11.5031 3.07067 11.2959 3.212 11.0972"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.3767 16.2661C20.7922 16.5971 21 16.927 21 17.3176C21 18.2995 19.6873 18.8976 17.0618 20.0939L15.357 20.8707C13.7048 21.6236 12.8786 22 12 22C11.1214 22 10.2952 21.6236 8.64298 20.8707L6.93817 20.0939C4.31272 18.8976 3 18.2995 3 17.3176C3 16.927 3.20778 16.5971 3.62334 16.2661"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
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
      <nav class="mx-auto flex max-w-screen-xl flex-col px-8">
        <div class="flex justify-around">
          <div class="flex flex-col gap-3">
            <h3 class="mb-2 font-medium">Inspiration</h3>
            <a
              href="https://www.shadcn-vue.com/"
              target="_blank"
              class="text-sm text-slate-600 hover:text-slate-900"
            >
              shadcn-vue
            </a>
            <a
              href="https://magicui.design/"
              target="_blank"
              class="text-sm text-slate-600 hover:text-slate-900"
            >
              magic ui
            </a>
            <a
              href="https://www.tremor.so/"
              target="_blank"
              class="text-sm text-slate-600 hover:text-slate-900"
            >
              tremor
            </a>
            <a
              href="https://nextui.org/"
              target="_blank"
              class="text-sm text-slate-600 hover:text-slate-900"
            >
              next ui
            </a>
            <a
              href="https://ui.aceternity.com/"
              target="_blank"
              class="text-sm text-slate-600 hover:text-slate-900"
            >
              aceternity ui
            </a>
            <a
              href="https://www.hover.dev/"
              target="_blank"
              class="text-sm text-slate-600 hover:text-slate-900"
            >
              hover.dev
            </a>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="mb-2 font-medium">Support</h3>
            <a
              href="/docs/getting-started/introduction"
              class="text-sm text-slate-600 hover:text-slate-900"
            >
              Documentation
            </a>
            <a
              href="/docs/getting-started/changelog"
              class="text-sm text-slate-600 hover:text-slate-900"
            >
              Changelog
            </a>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="mb-2 font-medium">More psy</h3>
            <a
              href="https://psylibrary.com"
              target="_blank"
              class="text-sm text-slate-600 hover:text-slate-900"
            >
              psylibrary
            </a>
            <a
              href="https://psybitcoin.com"
              target="_blank"
              class="text-sm text-slate-600 hover:text-slate-900"
            >
              psybitcoin
            </a>
            <a
              href="https://psycarlo.com"
              target="_blank"
              class="text-sm text-slate-600 hover:text-slate-900"
            >
              psycarlo
            </a>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="mb-2 font-medium">Quick links</h3>
            <a
              href="/docs/getting-started/introduction"
              class="text-sm text-slate-600 hover:text-slate-900"
            >
              Introduction
            </a>
            <a
              href="/docs/getting-started/installation"
              class="text-sm text-slate-600 hover:text-slate-900"
            >
              Installation
            </a>
            <a
              href="/components"
              class="text-sm text-slate-600 hover:text-slate-900"
            >
              Components
            </a>
            <a
              href="https://github.com/Psycarlo/psyui"
              target="_blank"
              class="text-sm text-slate-600 hover:text-slate-900"
            >
              Github
            </a>
            <a href="#top" class="text-sm text-slate-600 hover:text-slate-900">
              Go to top
            </a>
          </div>
        </div>
        <hr class="my-12" />
        <div class="flex items-center justify-between">
          <p class="text-sm text-slate-600">© 2024 psyui</p>
          <ul class="flex items-center gap-2">
            <li>
              <a :href="siteConfig.links.github" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 19.516"
                  class="h-5 w-5 fill-slate-600 hover:fill-slate-700"
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
  import { Content, useRoute } from 'vitepress'
  import Announcement from '../components/Announcement.vue'
  import Logo from '../components/Logo.vue'
  import { ref, onMounted } from 'vue'

  const $route = useRoute()

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

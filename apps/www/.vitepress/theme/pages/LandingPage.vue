<template>
  <main class="mx-auto flex max-w-screen-xl items-center px-4 pt-20">
    <div
      class="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6"
    >
      <div class="flex items-center gap-3">
        <p class="text-xs font-medium uppercase text-slate-600">Built with</p>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            class="h-6 w-6"
          >
            <path
              fill="#41b883"
              d="M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6Z"
            />
            <path
              fill="#41b883"
              d="m2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925Z"
            />
            <path
              fill="#35495e"
              d="M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z"
            />
          </svg>
          <p class="text-xs font-medium uppercase text-slate-600">Vue</p>
        </div>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            class="h-7 w-7"
          >
            <path
              fill="#44a8b3"
              d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1m-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1"
            />
          </svg>
          <p class="text-xs font-medium uppercase text-slate-600">
            Tailwind CSS
          </p>
        </div>
      </div>
      <h1 class="text-balance text-center text-7xl font-semibold">
        Make your vue websites look 10x better
      </h1>
      <p class="text-balance text-center text-xl text-slate-700">
        Copy paste beautiful vue components and use them to build beautiful
        dashboards and trending websites. Free and open-source, accessible and
        customizable.
      </p>
      <div class="flex gap-3">
        <a
          href="/docs/getting-started/introduction"
          class="from-brand-primary/75 to-brand-primary text-brand-white hover:from-brand-primary/70 hover:to-brand-primary/90 flex items-center justify-center rounded-md bg-gradient-to-b px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200"
        >
          Get started
        </a>
        <a
          :href="siteConfig.links.github"
          target="_blank"
          class="group inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200 hover:bg-slate-50"
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
          GitHub
        </a>
      </div>
      <Card class="mx-auto flex max-w-md items-center justify-center gap-4">
        <p class="text-brand-black font-medium">BTC</p>
        <p class="text-brand-gray-700">Bitcoin</p>
        <SparkLineChart
          :data="[
            { x: 0, y: 4000 },
            { x: 1, y: 3000 },
            { x: 2, y: 2000 },
            { x: 3, y: 2780 },
            { x: 4, y: 1890 },
            { x: 5, y: 2390 },
            { x: 6, y: 3490 }
          ]"
        />
        <p class="text-brand-gray-black font-medium">$69,420.69</p>
      </Card>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { siteConfig } from '../config/site'

  import Card from '../../../src/lib/registry/ui/Card.vue'
  import SparkLineChart from '../../../src/lib/registry/ui/SparkLineChart.vue'
</script>

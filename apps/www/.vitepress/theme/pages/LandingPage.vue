<template>
  <main class="mx-auto flex max-w-screen-xl items-center px-4 pt-20">
    <div
      class="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6"
    >
      <div class="flex items-center gap-4">
        <p class="text-xs font-medium uppercase text-slate-600">Built with</p>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18.813 16.327"
            class="h-5 w-5"
          >
            <g transform="translate(-2 -3.9)" opacity="0.2">
              <path
                d="M17.386,3.9l-5.98,10.414L5.427,3.9H2l9.406,16.327L20.813,3.9Z"
                transform="translate(0 0)"
              />
              <path
                d="M13.408,7.663,11.258,3.9H8.1l5.308,9.138L18.716,3.9H15.625Z"
                transform="translate(-2.002)"
              />
            </g>
          </svg>
          <p class="text-xs font-medium uppercase text-slate-600">Vue</p>
        </div>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 27.211 16.327"
            class="h-6 w-6"
          >
            <path
              d="M15.606,6c-3.633,0-5.891,1.81-6.8,5.442,1.361-1.81,2.952-2.49,4.762-2.041a5.8,5.8,0,0,1,2.6,1.837,7.777,7.777,0,0,0,6.245,2.925c3.633,0,5.891-1.81,6.8-5.442-1.361,1.81-2.952,2.49-4.762,2.041a5.877,5.877,0,0,1-2.6-1.837A7.777,7.777,0,0,0,15.606,6M8.8,14.163c-3.633,0-5.891,1.81-6.8,5.442,1.361-1.81,2.952-2.49,4.762-2.041a5.877,5.877,0,0,1,2.6,1.837,7.777,7.777,0,0,0,6.245,2.925c3.633,0,5.891-1.81,6.8-5.442-1.361,1.81-2.952,2.49-4.762,2.041a5.877,5.877,0,0,1-2.6-1.837A7.777,7.777,0,0,0,8.8,14.163"
              transform="translate(-2 -6)"
              opacity="0.2"
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
      <a
        :href="siteConfig.links.github"
        target="_blank"
        class="group inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-1 font-medium shadow-sm transition-all duration-200 hover:bg-slate-50"
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
      <Card class="flex items-center gap-4">
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

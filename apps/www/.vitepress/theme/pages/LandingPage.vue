<template>
  <div class="relative bg-gradient-to-b from-white to-slate-50">
    <a
      class="absolute left-[8%] top-20 hidden -rotate-12 rounded-full border border-slate-200/50 bg-slate-50 px-1.5 py-0.5 text-[10px] text-slate-400 hover:underline md:inline-block lg:left-[16%] xl:left-[22%]"
      href="https://www.tremor.so/"
      target="_blank"
    >
      Website inspired by <b>tremor.so</b>
    </a>
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
      </div>
    </main>
  </div>
  <div class="border-b border-b-slate-200 bg-slate-50">
    <section class="mx-auto flex max-w-screen-xl flex-col gap-4 px-4 py-20">
      <div class="flex flex-col gap-4 md:flex-row">
        <div
          class="w-full rounded-md bg-slate-50/40 p-1.5 ring-1 ring-inset ring-slate-200/50 md:w-7/12"
        >
          <Card class="flex h-full flex-col justify-between gap-4 bg-white p-8">
            <Card class="flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <CheckCircleIcon class="fill-brand-primary h-5 w-5" />
                  <span class="font-medium">website.com</span>
                </div>
                <span class="xs:inline hidden text-sm text-slate-500">
                  69% uptime
                </span>
              </div>
              <Tracker :data="trackerData" />
            </Card>
            <div
              class="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Badge
                variant="filled"
                class="bg-brand-primaryDark rounded-full font-medium text-white"
              >
                <PencilIcon class="h-4 w-4" />
                Customizable
              </Badge>
              <Badge
                class="border-brand-primary bg-brand-primary text-brand-primary font-medium"
              >
                <SparklesIcon class="h-4 w-4" />
                Beautiful
              </Badge>
              <Badge
                variant="filled"
                class="bg-brand-primaryDark font-medium text-white"
              >
                <FolderOpenIcon class="h-4 w-4" />
                Open source
              </Badge>
            </div>
            <div class="flex flex-col">
              <h3 class="mt-2 text-lg font-bold">Uptime!</h3>
              <p class="mt-1 max-w-lg text-slate-500">
                Psyui does not help with your server's uptime, but your website
                will look way better!
              </p>
            </div>
          </Card>
        </div>
        <div
          class="w-full rounded-md bg-slate-50/40 p-1.5 ring-1 ring-inset ring-slate-200/50 md:w-5/12"
        >
          <Card class="flex h-full flex-col gap-4 bg-white p-8">
            <Card class="flex flex-col gap-2">
              <span class="font-medium">Website Analytics</span>
              <div class="mt-2 flex justify-between">
                <span class="text-brand-primary text-sm">Url</span>
                <span class="text-brand-primary text-sm">Views</span>
              </div>
              <BarList :data="barListData" />
            </Card>
            <div class="flex justify-center">
              <Button as="a" href="/components" class="group">
                View More
                <AnimatedChevron />
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <div
        class="rounded-md bg-slate-50/40 p-1.5 ring-1 ring-inset ring-slate-200/50"
      >
        <Card class="flex flex-col bg-white p-8">
          <div class="flex flex-col gap-4 md:flex-row">
            <Card class="flex w-full flex-col gap-4 md:w-1/3">
              <div class="flex flex-col gap-1">
                <span class="text-sm text-slate-500">Mempool memory used</span>
                <p class="font-semibold">207MB</p>
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-500">69%</span>
                  <span class="text-sm text-slate-500">207 of 300MB</span>
                </div>
                <ProgressBar :value="69" class="bg-brand-primary h-2" />
              </div>
            </Card>
            <Card class="flex w-full flex-col gap-4 md:w-1/3">
              <div class="flex flex-col gap-1">
                <span class="text-sm text-slate-500">Bitcoin (BTC)</span>
                <div class="flex items-center justify-between">
                  <p class="font-semibold">$69420.69</p>
                  <p class="text-sm font-medium">
                    +6.9k <span class="text-brand-primaryLight">+6.9%</span>
                  </p>
                </div>
                <SparkAreaChart
                  :data="[
                    { x: 0, y: 61500 },
                    { x: 1, y: 62250 },
                    { x: 2, y: 61750 },
                    { x: 3, y: 63500 },
                    { x: 4, y: 63000 },
                    { x: 5, y: 66750 },
                    { x: 6, y: 69420 }
                  ]"
                  :min="55000"
                  class="mt-3 !w-full"
                />
              </div>
            </Card>
            <Card class="flex w-full items-center justify-center md:w-1/3">
              <div class="flex items-center gap-4">
                <ProgressCircle :value="80" class="stroke-brand-primary">
                  <span class="text-sm">80%</span>
                </ProgressCircle>
                <div class="flex flex-col">
                  <span class="text-sm font-medium">Miners running</span>
                  <span class="text-sm text-slate-500">4 of 5 running</span>
                </div>
              </div>
            </Card>
          </div>
          <h3 class="mt-6 text-lg font-bold">
            Spark Charts, Progress Bar and Progress Circle
          </h3>
          <p class="mt-1 text-slate-500">
            With these micro visualizations, your dashboard will look so nice.
          </p>
        </Card>
      </div>
    </section>
  </div>
  <section class="mx-auto flex max-w-screen-xl flex-col gap-2 px-4 py-20">
    <span class="text-brand-primary font-semibold">
      Super fast development
    </span>
    <h2 class="max-w-2xl text-3xl font-bold">
      Ready to use, yet customizable components for your vue projects
    </h2>
    <div class="mt-6 flex w-full flex-col justify-between gap-4 md:flex-row">
      <Card class="flex flex-col gap-1 border-none shadow-none">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 p-3"
        >
          <Square3Stack3DIcon class="h-5 w-5 fill-red-600" />
        </div>
        <span class="mt-3 text-3xl font-bold">More than 69</span>
        <span class="font-medium">Beautiful components</span>
        <span class="mt-3 text-sm text-slate-600">
          All components are available for copy paste on this website.
        </span>
      </Card>
      <Card class="flex flex-col border-none shadow-none">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 p-3"
        >
          <FolderOpenIcon class="fill-brand-secondaryLight h-5 w-5" />
        </div>
        <span class="mt-3 text-3xl font-bold">Open source</span>
        <span class="font-medium">Free and open source</span>
        <span class="mt-3 text-sm text-slate-600">
          All the code is free and open source under MIT License. Feel free to
          visit our GitHub and give us a star.
        </span>
      </Card>
      <Card class="flex flex-col border-none shadow-none">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 p-3"
        >
          <HeartIcon class="fill-brand-primary h-5 w-5" />
        </div>
        <span class="mt-3 text-3xl font-bold">Vue & Tailwind</span>
        <span class="font-medium">Built with the best technologies</span>
        <span class="mt-3 text-sm text-slate-600">
          Vue is so good and Tailwind is better. All components are built using
          these two.
        </span>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { siteConfig } from '../config/site'

  import Card from '@/lib/registry/ui/Card.vue'
  import SparkAreaChart from '@/lib/registry/ui/SparkAreaChart.vue'
  import ProgressBar from '@/lib/registry/ui/ProgressBar.vue'
  import ProgressCircle from '@/lib/registry/ui/ProgressCircle.vue'
  import Tracker from '@/lib/registry/ui/Tracker.vue'
  import BarList from '@/lib/registry/ui/BarList.vue'
  import Button from '@/lib/registry/ui/Button.vue'
  import AnimatedChevron from '@/lib/registry/ui/AnimatedChevron.vue'
  import Badge from '@/lib/registry/ui/Badge.vue'
  import {
    Square3Stack3DIcon,
    FolderOpenIcon,
    HeartIcon,
    CheckCircleIcon,
    PencilIcon,
    SparklesIcon
  } from '@heroicons/vue/24/solid'

  const trackerData = [
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'gray' as const, tooltip: 'Offline' },
    { variant: 'gray' as const, tooltip: 'Offline' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'gray' as const, tooltip: 'Offline' },
    { variant: 'gray' as const, tooltip: 'Offline' },
    { variant: 'gray' as const, tooltip: 'Offline' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'gray' as const, tooltip: 'Offline' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'gray' as const, tooltip: 'Offline' },
    { variant: 'gray' as const, tooltip: 'Offline' },
    { variant: 'gray' as const, tooltip: 'Offline' },
    { variant: 'gray' as const, tooltip: 'Offline' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' },
    { variant: 'primary' as const, tooltip: 'Online' }
  ]

  const barListData = [
    { name: '/mempool', value: 69 },
    { name: '/lightning', value: 128 },
    { name: '/utxos', value: 420 },
    { name: '/bitcoin', value: 489 }
  ]
</script>

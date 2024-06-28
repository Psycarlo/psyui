<template>
  <main class="mx-auto flex max-w-screen-xl px-4 pt-20">
    <div class="flex max-w-xl flex-col gap-2">
      <h1 class="text-4xl font-bold">Components</h1>
      <p class="text-lg text-slate-700">
        Psyui components crafted with love to make your websites look much
        better. Find the list of components below.
      </p>
    </div>
  </main>
  <section class="mx-auto flex max-w-screen-xl px-4 pt-16">
    <div class="flex w-full flex-col gap-2">
      <h2 class="text-2xl font-bold">Common</h2>
      <hr />
      <ul class="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="commonComponent in commonComponents">
          <ComponentCard
            :title="commonComponent.title"
            :href="commonComponent.href"
            :img="commonComponent.img"
          />
        </li>
      </ul>
    </div>
  </section>
  <section class="mx-auto flex max-w-screen-xl px-4 pt-20">
    <div class="flex w-full flex-col gap-2">
      <h2 class="text-2xl font-bold">Visualizations</h2>
      <hr />
      <ul class="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="visualizationComponent in visualizationComponents">
          <ComponentCard
            :title="visualizationComponent.title"
            :href="visualizationComponent.href"
            :img="visualizationComponent.img"
          />
        </li>
      </ul>
    </div>
  </section>
  <section class="mx-auto flex max-w-screen-xl px-4 pt-20">
    <div class="flex w-full flex-col gap-2">
      <h2 class="text-2xl font-bold">Trending</h2>
      <hr />
      <ul class="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="trendingComponent in trendingComponents">
          <ComponentCard
            :title="trendingComponent.title"
            :href="trendingComponent.href"
            :img="trendingComponent.img"
          />
        </li>
      </ul>
    </div>
  </section>
  <section class="mx-auto flex max-w-screen-xl px-4 pt-20">
    <div class="flex w-full flex-col gap-2">
      <h2 class="text-2xl font-bold">Others</h2>
      <hr />
      <ul class="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="otherComponent in otherComponents">
          <ComponentCard
            :title="otherComponent.title"
            :href="otherComponent.href"
            :img="otherComponent.img"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
  import ComponentCard from '../components/ComponentCard.vue'

  type ComponentCardProps = {
    title: string
    href: string
    img: string
  }

  const commonComponents: ComponentCardProps[] = [
    {
      title: 'Accordion',
      href: '/docs/common/accordion',
      img: '/images/components/accordion.webp'
    },
    {
      title: 'Avatar',
      href: '/docs/common/avatar',
      img: '/images/components/avatar.webp'
    },
    {
      title: 'Badge',
      href: '/docs/common/badge',
      img: '/images/components/badge.webp'
    },
    {
      title: 'Button',
      href: '/docs/common/button',
      img: '/images/components/button.webp'
    },
    {
      title: 'Callout',
      href: '/docs/common/callout',
      img: '/images/components/callout.webp'
    },
    {
      title: 'Card',
      href: '/docs/common/card',
      img: '/images/components/card.webp'
    },
    {
      title: 'Kbd',
      href: '/docs/common/kbd',
      img: '/images/components/kbd.webp'
    },
    {
      title: 'Tooltip',
      href: '/docs/common/tooltip',
      img: '/images/components/tooltip.webp'
    }
  ]

  const visualizationComponents: ComponentCardProps[] = [
    {
      title: 'Bar List',
      href: '/docs/visualizations/bar-list',
      img: '/images/components/bar-list.webp'
    },
    {
      title: 'Progress Bar',
      href: '/docs/common/progress-bar',
      img: '/images/components/progress-bar.webp'
    },
    {
      title: 'Progress Circle',
      href: '/docs/common/progress-circle',
      img: '/images/components/progress-circle.webp'
    },
    {
      title: 'Spark Area Chart',
      href: '/docs/visualizations/spark-area-chart',
      img: '/images/components/spark-area-chart.webp'
    },
    {
      title: 'Spark Line Chart',
      href: '/docs/visualizations/spark-line-chart',
      img: '/images/components/spark-line-chart.webp'
    },
    {
      title: 'Tracker',
      href: '/docs/visualizations/tracker',
      img: '/images/components/tracker.webp'
    }
  ]

  const trendingComponents: ComponentCardProps[] = [
    {
      title: 'Marquee',
      href: '/docs/trending/marquee',
      img: '/images/components/marquee.webp'
    }
  ]

  const otherComponents: ComponentCardProps[] = [
    {
      title: 'Animated Chevron Icon',
      href: '/docs/others/animated-chevron',
      img: '/images/components/animated-chevron.webp'
    }
  ]
</script>

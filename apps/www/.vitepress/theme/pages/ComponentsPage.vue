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
            :soon="commonComponent.soon"
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
            :soon="visualizationComponent.soon"
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
            :soon="trendingComponent.soon"
          />
        </li>
      </ul>
    </div>
  </section>
  <section class="mx-auto flex max-w-screen-xl px-4 pt-20">
    <div class="flex w-full flex-col gap-2">
      <h2 class="text-2xl font-bold">Bitcoin</h2>
      <hr />
      <ul class="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="bitcoinComponent in bitcoinComponents">
          <ComponentCard
            :title="bitcoinComponent.title"
            :href="bitcoinComponent.href"
            :img="bitcoinComponent.img"
            :soon="bitcoinComponent.soon"
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
            :soon="otherComponent.soon"
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
    soon?: boolean
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
      title: 'Checkbox',
      href: '/docs/common/checkbox',
      img: '/images/components/checkbox.webp'
    },
    {
      title: 'Draggable',
      href: '/docs/common/draggable',
      img: '/images/components/draggable.webp',
      soon: true
    },
    {
      title: 'Kbd',
      href: '/docs/common/kbd',
      img: '/images/components/kbd.webp'
    },
    {
      title: 'Number Input',
      href: '/docs/common/number-input',
      img: '/images/components/number-input.webp'
    },
    {
      title: 'Pin Input',
      href: '/docs/common/pin-input',
      img: '/images/components/pin-input.webp'
    },
    {
      title: 'Radio Card Group',
      href: '/docs/common/radio-card-group',
      img: '/images/components/radio-card-group.webp'
    },
    {
      title: 'Select',
      href: '/docs/common/select',
      img: '/images/components/select.webp'
    },
    {
      title: 'Skeleton',
      href: '/docs/common/skeleton',
      img: '/images/components/skeleton.webp'
    },
    {
      title: 'Sonner',
      href: '/docs/common/sonner',
      img: '/images/components/sonner.webp'
    },
    {
      title: 'Switch',
      href: '/docs/common/switch',
      img: '/images/components/switch.webp'
    },
    {
      title: 'Table',
      href: '/docs/common/table',
      img: '/images/components/table.webp',
      soon: true
    },
    {
      title: 'Tabs',
      href: '/docs/common/tabs',
      img: '/images/components/tabs.webp'
    },
    {
      title: 'Text Input',
      href: '/docs/common/text-input',
      img: '/images/components/text-input.webp'
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
      href: '/docs/visualizations/progress-bar',
      img: '/images/components/progress-bar.webp'
    },
    {
      title: 'Progress Circle',
      href: '/docs/visualizations/progress-circle',
      img: '/images/components/progress-circle.webp'
    },
    {
      title: 'Progress Semicircle',
      href: '/docs/visualizations/progress-semicircle',
      img: '/images/components/progress-semicircle.webp'
    },
    {
      title: 'Spark Area Chart',
      href: '/docs/visualizations/spark-area-chart',
      img: '/images/components/spark-area-chart.webp'
    },
    {
      title: 'Spark Bar Chart',
      href: '/docs/visualizations/spark-bar-chart',
      img: '/images/components/spark-bar-chart.webp'
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
      title: 'Border Beam',
      href: '/docs/trending/border-beam',
      img: '/images/components/border-beam.webp'
    },
    {
      title: 'Globe',
      href: '/docs/trending/globe',
      img: '/images/components/globe.webp',
      soon: true
    },
    {
      title: 'Letter Pullup',
      href: '/docs/trending/letter-pullup',
      img: '/images/components/letter-pullup.webp'
    },
    {
      title: 'Marquee',
      href: '/docs/trending/marquee',
      img: '/images/components/marquee.webp'
    },
    {
      title: 'Meteors',
      href: '/docs/trending/meteors',
      img: '/images/components/meteors.webp'
    },
    {
      title: 'Number Ticker',
      href: '/docs/trending/number-ticker',
      img: '/images/components/number-ticker.webp'
    },
    {
      title: 'Origami',
      href: '/docs/trending/origami',
      img: '/images/components/origami.webp',
      soon: true
    },
    {
      title: 'Word Pullup',
      href: '/docs/trending/word-pullup',
      img: '/images/components/word-pullup.webp'
    }
  ]

  const bitcoinComponents: ComponentCardProps[] = [
    {
      title: 'Block',
      href: '/docs/bitcoin/block',
      img: '/images/components/block.webp'
    },
    {
      title: 'QRCode',
      href: '/docs/bitcoin/qrcode',
      img: '/images/components/qrcode.webp'
    },
    {
      title: 'Shorten',
      href: '/docs/bitcoin/shorten',
      img: '/images/components/shorten.webp'
    }
  ]

  const otherComponents: ComponentCardProps[] = [
    {
      title: 'Animated Chevron Icon',
      href: '/docs/others/animated-chevron',
      img: '/images/components/animated-chevron.webp'
    },
    {
      title: 'Animated Copy Icon',
      href: '/docs/others/animated-copy',
      img: '/images/components/animated-copy.webp',
      soon: true
    }
  ]
</script>

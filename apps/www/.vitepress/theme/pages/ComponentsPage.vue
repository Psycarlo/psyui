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
        <li>
          <ComponentCard
            title="Card"
            href="/docs/common/card"
            img="/images/components/card.webp"
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
        <li>
          <ComponentCard
            title="Spark Line Chart"
            href="/docs/visualizations/spark-line-chart"
            img="/images/components/card.webp"
          />
        </li>
      </ul>
    </div>
  </section>
  <section class="mx-auto flex max-w-screen-xl px-4 pt-20">
    <div class="flex w-full flex-col gap-2">
      <h2 class="text-2xl font-bold">Trending</h2>
      <hr />
    </div>
  </section>
  <section class="mx-auto flex max-w-screen-xl px-4 pt-20">
    <div class="flex w-full flex-col gap-2">
      <h2 class="text-2xl font-bold">Others</h2>
      <hr />
    </div>
  </section>
</template>

<script setup lang="ts">
  import ComponentCard from '../components/ComponentCard.vue'
</script>

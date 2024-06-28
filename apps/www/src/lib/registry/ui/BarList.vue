<template>
  <div :class="barListClass" :aria-sort="props.sort">
    <div
      v-for="(bar, index) in sortedData"
      class="relative flex w-full items-center justify-between gap-4"
      :key="bar.name"
    >
      <p class="absolute left-2 truncate whitespace-nowrap text-sm">
        {{ bar.name }}
      </p>
      <div
        class="bg-brand-primaryLight/50 h-8 rounded-md"
        :style="{ width: `${widths[index]}%` }"
      ></div>
      <p class="text-sm">{{ bar.value }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed } from 'vue'

  type Bar = {
    name: string
    value: number
  }

  type BarListProps = {
    data: Bar[]
    sort?: 'ascending' | 'descending' | 'none'
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<BarListProps>(), {
    sort: 'descending'
  })

  const barListClass = computed(() =>
    tv({
      base: 'flex flex-col gap-1.5'
    })(props)
  )

  function sortData(data: Bar[]) {
    if (props.sort === 'none') return data
    return [...data].sort((a, b) =>
      props.sort === 'ascending' ? a.value - b.value : b.value - a.value
    )
  }

  const sortedData = sortData(props.data)

  function calculateWidths() {
    const maxValue = Math.max(...sortedData.map((bar) => bar.value), 0)
    return sortedData.map((bar) =>
      bar.value === 0 ? 0 : Math.max((bar.value / maxValue) * 100, 2)
    )
  }

  const widths = calculateWidths()
</script>

<template>
  <VisXYContainer
    :class="containerClass"
    :svgDefs="svgDefs"
    :scaleByDomain="true"
    :yDomain="[props.min || min, props.max || max]"
  >
    <VisLine
      :data="data"
      :x="(d: DataRecord) => d.x"
      :y="(d: DataRecord) => d.y"
      color="#04AA6D"
    />
    <VisArea
      :data="data"
      :x="(d: DataRecord) => d.x"
      :y="(d: DataRecord) => d.y"
      color="url(#gradient)"
    />
  </VisXYContainer>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { VisXYContainer, VisArea, VisLine } from '@unovis/vue'
  import { computed, type HTMLAttributes } from 'vue'

  type DataRecord = { x: number; y: number }

  type SparkAreaChartProps = {
    data: DataRecord[]
    min?: number
    max?: number
    class?: HTMLAttributes['class']
  }

  const props = defineProps<SparkAreaChartProps>()

  const containerClass = computed(() =>
    tv({
      base: 'h-[40px] !w-[144px]'
    })(props)
  )

  const yValues = props.data.map((record) => record.y)
  const min = Math.min(...yValues)
  const max = Math.max(...yValues)

  const svgDefs = `
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="0%" stop-color="#04AA6D" stop-opacity="35%" />
      <stop offset="100%" stop-color="#04AA6D" stop-opacity="0%" />
    </linearGradient>
  `
</script>

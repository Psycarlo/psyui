<template>
  <VisXYContainer
    :class="containerClass"
    :scaleByDomain="true"
    :yDomain="[props.min || min, props.max || max]"
  >
    <VisStackedBar
      :data="data"
      :x="(d: DataRecord) => d.x"
      :y="(d: DataRecord) => d.y"
      color="#04AA6D"
      :barWidth="props.barWidth"
    />
  </VisXYContainer>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { VisXYContainer, VisStackedBar } from '@unovis/vue'
  import { computed, type HTMLAttributes } from 'vue'

  type DataRecord = { x: number; y: number }

  type SparkBarChartProps = {
    data: DataRecord[]
    min?: number
    max?: number
    barWidth?: number
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<SparkBarChartProps>(), {
    barWidth: 4
  })

  const containerClass = computed(() =>
    tv({
      base: 'h-[40px] !w-[144px]'
    })(props)
  )

  const yValues = props.data.map((record) => record.y)
  const min = Math.min(...yValues)
  const max = Math.max(...yValues)
</script>

<template>
  <div :class="progressCircleClass">
    <svg
      :width="props.radius * 2"
      :height="props.radius * 2"
      :view-box="`0 0 ${props.radius * 2} ${props.radius * 2}`"
      :aria-label="`progress bar ${props.value}%`"
      role="progressbar"
      :aria-valuemin="0"
      :aria-valuemax="props.max"
      :aria-valuenow="props.value"
      :aria-valuetext="`${props.value}%`"
    >
      <circle
        :r="normalizedRadius"
        :cx="props.radius"
        :cy="props.radius"
        :stroke-width="props.strokeWidth"
        fill="transparent"
        stroke=""
        stroke-linecap="round"
        class="stroke-brand-primary/20"
      />
      <circle
        v-if="safeValue >= 0"
        :r="normalizedRadius"
        :cx="props.radius"
        :cy="props.radius"
        :stroke-width="props.strokeWidth"
        :stroke-dasharray="`${circumference} ${circumference}`"
        :stroke-dashoffset="offset"
        fill="transparent"
        stroke=""
        stroke-linecap="round"
        class="stroke-brand-primary transform-gpu transition-all duration-500 ease-in-out"
      />
    </svg>
    <div class="absolute inset-0 flex items-center justify-center">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed, ref, watch, toRef } from 'vue'

  type ProgressBarProps = {
    value?: number
    radius?: number
    strokeWidth?: number
    max?: number
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<ProgressBarProps>(), {
    value: 0,
    radius: 32,
    strokeWidth: 6,
    max: 100
  })

  const progressCircleClass = computed(() =>
    tv({
      base: 'relative'
    })(props)
  )

  function calculateSafeValue(value: number) {
    return Math.min(props.max, Math.max(value, 0))
  }

  function calculateOffset(safeValue: number) {
    return circumference - (safeValue / props.max) * circumference
  }

  const valueRef = toRef(props, 'value')
  const safeValue = ref(calculateSafeValue(props.value))
  const normalizedRadius = props.radius - props.strokeWidth / 2
  const circumference = normalizedRadius * 2 * Math.PI
  const offset = ref(calculateOffset(safeValue.value))

  watch(valueRef, (newValue) => {
    safeValue.value = Math.min(props.max, Math.max(newValue, 0))
    offset.value = circumference - (newValue / props.max) * circumference
  })
</script>

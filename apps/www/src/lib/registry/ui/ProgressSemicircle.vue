<template>
  <div :class="progressSemicircleClass">
    <svg
      :width="props.radius * 2"
      :height="props.radius + props.strokeWidth"
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
        :stroke-dasharray="`${circumference} ${circumference}`"
        :stroke-dashoffset="-circumference / 2"
        fill="transparent"
        stroke-linecap="round"
        :class="semicircleClass"
      />
      <circle
        v-if="safeValue > 0"
        :r="normalizedRadius"
        :cx="props.radius"
        :cy="props.radius"
        :stroke-width="props.strokeWidth"
        :stroke-dasharray="`${circumference}`"
        :stroke-dashoffset="offset"
        fill="transparent"
        stroke-linecap="round"
        :class="progressClass"
        :style="{
          transform: `translateY(-${props.strokeWidth * 2}px) rotate(180deg)`
        }"
      />
    </svg>
    <div class="absolute inset-x-0 top-[38%] flex items-center justify-center">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed, ref, watch, toRef } from 'vue'

  type ProgressSemicircleProps = {
    value?: number
    radius?: number
    strokeWidth?: number
    max?: number
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<ProgressSemicircleProps>(), {
    value: 0,
    radius: 32,
    strokeWidth: 6,
    max: 100
  })

  const progressSemicircleClass = computed(() =>
    tv({ base: 'relative' })(props)
  )

  const semicircleClass = computed(() => tv({ base: 'opacity-20' })(props))

  const progressClass = computed(() =>
    tv({
      base: `origin-bottom transform-gpu transition-all duration-500 ease-in-out`
    })(props)
  )

  function calculateSafeValue(value: number) {
    return Math.min(props.max, Math.max(value, 0))
  }

  function calculateOffset(safeValue: number) {
    return circumference - (safeValue / props.max) * (circumference / 2)
  }

  const valueRef = toRef(props, 'value')
  const safeValue = ref(calculateSafeValue(props.value))
  const normalizedRadius = props.radius - props.strokeWidth / 2
  const circumference = normalizedRadius * 2 * Math.PI
  const offset = ref(calculateOffset(safeValue.value))

  watch(valueRef, (newValue) => {
    safeValue.value = calculateSafeValue(newValue)
    offset.value = calculateOffset(newValue)
  })
</script>

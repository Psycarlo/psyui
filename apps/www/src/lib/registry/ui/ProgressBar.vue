<template>
  <div
    :aria-label="`progress bar ${props.value}%`"
    role="progressbar"
    :aria-valuemin="0"
    :aria-valuemax="props.max"
    :aria-valuenow="props.value"
    :aria-valuetext="`${props.value}%`"
    :class="progressBarClass"
  >
    <div
      :class="progressClass"
      :style="`transform: translateX(-${props.max - props.value}%)`"
    ></div>
  </div>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed } from 'vue'

  type ProgressBarProps = {
    value?: number
    max?: number
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<ProgressBarProps>(), {
    value: 0,
    max: 100
  })

  const progressBarClass = computed(() =>
    tv({
      base: 'relative h-2.5 w-full overflow-hidden rounded-full bg-inherit bg-opacity-20'
    })(props)
  )

  const progressClass = computed(() =>
    tv({
      base: 'h-full w-full flex-1 transition-all duration-500 ease-in-out'
    })(props)
  )
</script>

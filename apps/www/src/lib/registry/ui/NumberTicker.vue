<template>
  <span ref="target" :class="numberTickerClass" />
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed } from 'vue'

  type NumberTickerProps = {
    value: number
    direction?: 'up' | 'down'
    delay?: number
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<NumberTickerProps>(), {
    direction: 'up',
    delay: 0
  })

  const numberTickerClass = computed(() =>
    tv({ base: 'inline-block tabular-nums' })(props)
  )
</script>

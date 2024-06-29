<template>
  <component :is="props.as" :class="shortenClass">
    {{ format(props.value) }}
  </component>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { computed, type HTMLAttributes, type Component } from 'vue'

  type ShortenProps = {
    as?: string | Component
    value: string
    threshold?: 6 | 7 | 8 | 9 | 10
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<ShortenProps>(), {
    as: 'span',
    threshold: 7
  })

  const shortenClass = computed(() => tv({ base: 'whitespace-nowrap' })(props))

  function format(value: string) {
    if (value.length <= props.threshold * 2) return value

    const beginning = value.substring(0, props.threshold)
    const end = value.substring(value.length - props.threshold, value.length)
    return `${beginning}...${end}`
  }
</script>

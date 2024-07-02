<template>
  <div :class="blockClass">
    <div
      class="absolute left-[calc(-.16*100%)] top-[calc(-.192*100%)] h-[calc(.192*100%)] w-full origin-top skew-x-[40deg] transform-gpu bg-inherit brightness-[0.85] filter"
    ></div>
    <div
      class="absolute left-[calc(-.16*100%)] top-[calc(-.096*100%)] h-full w-[calc(.16*100%)] origin-top skew-y-[50deg] transform-gpu bg-inherit brightness-[1.15] filter"
    ></div>
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed } from 'vue'

  type BlockProps = {
    class?: HTMLAttributes['class']
  }

  const props = defineProps<BlockProps>()

  const blockClass = computed(() =>
    tv({ base: 'bg-brand-primary relative size-32' })(props)
  )
</script>

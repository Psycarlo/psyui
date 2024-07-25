<template>
  <div :class="skeletonClass" />
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed } from 'vue'

  type SkeletonProps = {
    class?: HTMLAttributes['class']
  }

  const props = defineProps<SkeletonProps>()

  const skeletonClass = computed(() =>
    tv({ base: 'bg-brand-gray-200 animate-pulse rounded-md' })(props)
  )
</script>

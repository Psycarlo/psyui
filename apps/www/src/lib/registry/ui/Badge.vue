<template>
  <span :class="badgeClass">
    <slot />
  </span>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed } from 'vue'

  type BadgeProps = {
    variant?: 'default' | 'filled'
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<BadgeProps>(), {
    variant: 'default'
  })

  const badgeClass = computed(() =>
    tv({
      base: 'inline-flex w-fit shrink-0 items-center gap-x-1 whitespace-nowrap rounded-md px-2 py-0.5 text-sm',
      variants: {
        variant: {
          default: 'border border-opacity-20 bg-opacity-10',
          filled: ''
        }
      }
    })(props)
  )
</script>

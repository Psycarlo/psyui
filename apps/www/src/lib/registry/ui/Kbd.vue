<template>
  <component :is="props.as" :class="kbdClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { tv } from 'tailwind-variants'

  type KbdProps = {
    as?: string
    size?: 'xs' | 'sm' | 'md'
  }

  const props = withDefaults(defineProps<KbdProps>(), {
    as: 'kbd',
    size: 'sm'
  })

  const kbdClass = computed(() =>
    tv({
      base: 'pointer-events-none inline-flex select-none items-center gap-1',
      variants: {
        size: {
          xs: '',
          sm: '',
          md: ''
        }
      }
    })(props)
  )
</script>

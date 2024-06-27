<template>
  <ScrollAreaRoot v-bind="delegatedProps" :class="rootClass">
    <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
      <slot />
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>

<script setup lang="ts">
  import { type HTMLAttributes, computed } from 'vue'
  import {
    ScrollAreaCorner,
    ScrollAreaRoot,
    type ScrollAreaRootProps,
    ScrollAreaViewport
  } from 'radix-vue'
  import { tv } from 'tailwind-variants'

  const props = defineProps<
    ScrollAreaRootProps & { class?: HTMLAttributes['class'] }
  >()

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
  })

  const rootClass = computed(() =>
    tv({ base: 'relative overflow-hidden' })(props)
  )
</script>

<template>
  <div :class="cardClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed } from 'vue'

  type CardProps = {
    class?: HTMLAttributes['class']
  }

  const props = defineProps<CardProps>()

  const cardClass = computed(() =>
    tv({
      base: 'w-full rounded-md border p-4 shadow-sm'
    })({ class: props.class })
  )
</script>

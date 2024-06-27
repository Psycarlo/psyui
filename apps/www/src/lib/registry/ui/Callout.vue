<template>
  <div :class="calloutClass">
    <div v-if="props.title || slots.icon" class="flex items-center gap-2">
      <slot name="icon" />
      <span class="font-semibold">{{ props.title }}</span>
    </div>
    <div v-if="slots.default" class="overflow-y-auto text-inherit">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed, useSlots } from 'vue'

  const slots = useSlots()

  type CalloutProps = {
    title?: string
    class?: HTMLAttributes['class']
  }

  const props = defineProps<CalloutProps>()

  const calloutClass = computed(() =>
    tv({
      base: 'flex flex-col gap-2 overflow-hidden rounded-md border-l-4 bg-opacity-10 p-4 text-sm'
    })(props)
  )
</script>

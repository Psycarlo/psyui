<template>
  <div :class="trackerClass">
    <div
      v-for="entry in props.data"
      class="h-full w-3 rounded-[1px] first:rounded-l-[4px] last:rounded-r-[4px]"
      :class="{
        'bg-brand-primary': entry.variant === 'primary',
        'bg-brand-secondary': entry.variant === 'secondary',
        'bg-brand-success': entry.variant === 'success',
        'bg-brand-warning': entry.variant === 'warning',
        'bg-brand-danger': entry.variant === 'danger',
        'bg-brand-info': entry.variant === 'info',
        'bg-brand-gray-500': entry.variant === 'gray'
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed } from 'vue'

  type Entry = {
    variant:
      | 'primary'
      | 'secondary'
      | 'success'
      | 'warning'
      | 'danger'
      | 'info'
      | 'gray'
    tooltip: string
  }

  type TrackerProps = {
    data: Entry[]
    class?: HTMLAttributes['class']
  }

  const props = defineProps<TrackerProps>()

  const trackerClass = computed(() =>
    tv({
      base: 'flex h-10 items-center gap-0.5'
    })(props)
  )
</script>

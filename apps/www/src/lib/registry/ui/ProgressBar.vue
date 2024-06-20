<template>
  <div>
    <div aria-label="progress bar">
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  type ProgressBarProps = {
    value?: number
    max?: number
    label?: string
  }

  const props = withDefaults(defineProps<ProgressBarProps>(), {
    value: 0,
    max: 100
  })
</script>

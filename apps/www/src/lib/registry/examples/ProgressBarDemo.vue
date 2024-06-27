<template>
  <Card
    class="mx-auto flex max-w-md flex-col items-center justify-center gap-3"
  >
    <div class="flex w-full items-center justify-between">
      <p class="text-sm font-bold">Difficulty Adjustment</p>
      <p class="text-xs text-slate-500">{{ `${progress}%` }}</p>
    </div>
    <ProgressBar :value="progress" class="bg-brand-primary h-2" />
  </Card>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import Card from '../ui/Card.vue'
  import ProgressBar from '../ui/ProgressBar.vue'

  const progress = ref(13)

  watchEffect((cleanupFn) => {
    const timer = setTimeout(() => (progress.value = 69), 1000)
    cleanupFn(() => clearTimeout(timer))
  })
</script>

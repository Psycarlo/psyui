<template>
  <Card class="mx-auto flex max-w-sm items-center gap-4">
    <ProgressCircle :value="progress">
      <p class="text-sm font-medium">{{ `${progress}%` }}</p>
    </ProgressCircle>
    <div class="flex flex-col gap-1">
      <p class="font-bold">1391/2016 blocks</p>
      <p class="text-sm font-medium text-slate-400">
        Bitcoin Difficulty Adjustment
      </p>
    </div>
  </Card>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import Card from '../ui/Card.vue'
  import ProgressCircle from '../ui/ProgressCircle.vue'

  const progress = ref(13)

  watchEffect((cleanupFn) => {
    const timer = setTimeout(() => (progress.value = 69), 1000)
    cleanupFn(() => clearTimeout(timer))
  })
</script>

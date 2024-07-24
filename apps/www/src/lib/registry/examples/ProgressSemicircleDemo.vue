<template>
  <Card
    class="mx-auto flex max-w-sm flex-col items-center justify-center gap-4"
  >
    <div class="flex flex-col items-center gap-0.5">
      <span class="text-xl font-semibold">Saving Goal</span>
      <span class="text-brand-gray-700 text-xs">Year of 2024</span>
    </div>
    <ProgressSemicircle
      :value="progress"
      :radius="88"
      :strokeWidth="10"
      class="stroke-brand-primary"
    >
      <div class="flex flex-col items-center gap-0.5">
        <span class="font-medium">{{ `${amount} BTC` }}</span>
        <span class="text-brand-gray-800 text-xs">of 6.15 BTC</span>
      </div>
    </ProgressSemicircle>
  </Card>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import Card from '../ui/Card.vue'
  import ProgressSemicircle from '../ui/ProgressSemicircle.vue'

  const progress = ref(13)
  const amount = ref(((progress.value * 6.15) / 100).toFixed(2))

  watchEffect((cleanupFn) => {
    const timer = setTimeout(() => {
      progress.value = 69
      amount.value = ((progress.value * 6.15) / 100).toFixed(2)
    }, 1000)
    cleanupFn(() => clearTimeout(timer))
  })
</script>

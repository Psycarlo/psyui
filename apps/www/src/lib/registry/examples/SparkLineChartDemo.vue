<template>
  <Card class="mx-auto flex max-w-md items-center justify-center gap-4">
    <p class="text-brand-black font-medium">BTC</p>
    <p class="text-brand-gray-700">Bitcoin</p>
    <SparkLineChart
      :data="[
        { x: 0, y: 4000 },
        { x: 1, y: 3000 },
        { x: 2, y: 2000 },
        { x: 3, y: 2780 },
        { x: 4, y: 1890 },
        { x: 5, y: 2390 },
        { x: 6, y: 3490 }
      ]"
      :min="1500"
    />
    <p class="text-brand-gray-black font-medium">$69,420.69</p>
  </Card>
</template>

<script setup lang="ts">
  import Card from '../ui/Card.vue'
  import SparkLineChart from '../ui/SparkLineChart.vue'
</script>

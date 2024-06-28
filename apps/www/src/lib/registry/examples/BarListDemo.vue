<template>
  <Card class="flex max-w-lg flex-col gap-2">
    <span class="text-lg font-medium">Website Analytics</span>
    <div class="mt-2 flex justify-between">
      <span class="text-sm text-slate-500">Url</span>
      <span class="text-sm text-slate-500">Views</span>
    </div>
    <BarList :data="barListData" sort="none" />
  </Card>
</template>

<script setup lang="ts">
  import Card from '../ui/Card.vue'
  import BarList from '../ui/BarList.vue'

  const barListData = [
    { name: '/btc', value: 489 },
    { name: '/lightning', value: 420 },
    { name: '/nodes', value: 69 }
  ]
</script>

<template>
  <Card class="flex w-fit flex-col gap-2">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-1">
        <CheckCircleIcon class="fill-brand-primary h-5 w-5" />
        <span class="font-medium">website.com</span>
      </div>
      <span class="text-brand-primaryLight text-sm">uptime 69%</span>
    </div>
    <Tracker :data="data" />
  </Card>
</template>

<script setup lang="ts">
  import Card from '../ui/Card.vue'
  import Tracker from '../ui/Tracker.vue'
  import { CheckCircleIcon } from '@heroicons/vue/24/solid'

  const data = [
    { variant: 'primary', tooltip: 'Operational' },
    { variant: 'primary', tooltip: 'Operational' },
    { variant: 'primary', tooltip: 'Operational' },
    { variant: 'primary', tooltip: 'Operational' },
    { variant: 'warning', tooltip: 'Degraded' },
    { variant: 'danger', tooltip: 'Server Down' },
    { variant: 'info', tooltip: 'Recover' },
    { variant: 'primary', tooltip: 'Operational' },
    { variant: 'primary', tooltip: 'Operational' },
    { variant: 'primary', tooltip: 'Operational' },
    { variant: 'warning', tooltip: 'Degraded' },
    { variant: 'primary', tooltip: 'Operational' },
    { variant: 'warning', tooltip: 'Degraded' },
    { variant: 'primary', tooltip: 'Operational' },
    { variant: 'primary', tooltip: 'Operational' },
    { variant: 'primary', tooltip: 'Operational' },
    { variant: 'primary', tooltip: 'Operational' },
    { variant: 'primary', tooltip: 'Operational' },
    { variant: 'primary', tooltip: 'Operational' }
  ]
</script>

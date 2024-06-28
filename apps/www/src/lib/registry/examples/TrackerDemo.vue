<template>
  <div class="max-w-md">
    <Tracker :data="data" />
  </div>
</template>

<script setup lang="ts">
  import Tracker from '../ui/Tracker.vue'

  const data = [
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
    { variant: 'primary', tooltip: 'Operational' }
  ]
</script>

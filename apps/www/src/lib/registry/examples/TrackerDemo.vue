<template>
  <Card class="flex w-fit flex-col gap-2">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-1">
        <CheckCircleIcon class="fill-brand-primary h-5 w-5" />
        <span class="font-medium">website.com</span>
      </div>
      <span class="text-brand-primaryLight text-sm">uptime 69%</span>
    </div>
    <Tracker :data="data">
      <template v-for="(entry, index) in data" #[index]>
        <span
          class="inline-flex items-center gap-1"
          :class="{ hidden: !entry.tooltip }"
        >
          <CheckCircleIcon
            v-if="entry.tooltip === 'Operational'"
            class="h-4 w-4"
          />
          <ExclamationCircleIcon
            v-if="entry.tooltip === 'Degraded'"
            class="h-4 w-4"
          />
          <XCircleIcon v-if="entry.tooltip === 'Server Down'" class="h-4 w-4" />
          <PlayCircleIcon v-if="entry.tooltip === 'Recover'" class="h-4 w-4" />
          {{ entry.tooltip }}
        </span>
      </template>
    </Tracker>
  </Card>
</template>

<script setup lang="ts">
  import Card from '../ui/Card.vue'
  import Tracker from '../ui/Tracker.vue'
  import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    XCircleIcon,
    PlayCircleIcon
  } from '@heroicons/vue/24/solid'

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
    { variant: 'gray' },
    { variant: 'primary', tooltip: 'Operational' }
  ]
</script>

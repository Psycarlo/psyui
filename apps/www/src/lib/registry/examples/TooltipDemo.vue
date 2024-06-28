<template>
  <div class="flex items-center gap-3">
    <Tooltip>
      <template #content>
        <span class="text-brand-white bg-brand-primary">
          Time to stack sats
        </span>
      </template>
      <span
        class="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700"
      >
        Important stuff
      </span>
    </Tooltip>
    <Tooltip>
      <template #content>
        <span class="text-brand-white bg-brand-primary">
          Time to stack sats
        </span>
      </template>
      <span
        class="inline-flex items-center gap-1 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700"
      >
        Dashboard information
        <InformationCircleIcon class="h-[18px] w-[18px]" />
      </span>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
  import Tooltip from '../ui/Tooltip.vue'
  import { InformationCircleIcon } from '@heroicons/vue/24/outline'
</script>

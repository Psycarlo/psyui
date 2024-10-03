<template>
  <div class="flex items-center gap-3">
    <Tooltip>
      <template #content>
        <span> Time to stack sats </span>
      </template>
      <span
        class="bg-brand-gray-100 text-brand-gray-700 rounded-md px-3 py-2 text-sm font-medium"
      >
        Important stuff
      </span>
    </Tooltip>
    <Tooltip variant="primary">
      <template #content>
        <span> Time to stack sats </span>
      </template>
      <span
        class="bg-brand-gray-100 text-brand-gray-700 inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium"
      >
        Dashboard information
        <InformationCircleIcon class="h-[18px] w-[18px]" />
      </span>
    </Tooltip>
    <Tooltip variant="primary">
      <template #content>
        <span>
          The Lightning Network is a payment protocol built on top of the
          Bitcoin blockchain.
        </span>
      </template>
      <span
        class="bg-brand-gray-100 text-brand-gray-1000 inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium"
      >
        <BoltIcon class="h-[18px] w-[18px]" />
      </span>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
  import Tooltip from '../ui/Tooltip.vue'
  import { InformationCircleIcon, BoltIcon } from '@heroicons/vue/24/outline'
</script>

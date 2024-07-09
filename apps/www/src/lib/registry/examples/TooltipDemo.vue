<template>
  <div class="flex items-center gap-3">
    <Tooltip>
      <template #content>
        <span> Time to stack sats </span>
      </template>
      <span
        class="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700"
      >
        Important stuff
      </span>
    </Tooltip>
    <Tooltip variant="primary">
      <template #content>
        <span> Time to stack sats </span>
      </template>
      <span
        class="inline-flex items-center gap-1 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700"
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
        class="inline-flex items-center gap-1 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700"
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

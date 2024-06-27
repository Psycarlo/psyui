<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <Callout
      title="Purging"
      class="h-fit max-w-xs border-yellow-400 bg-yellow-400 text-yellow-700"
    >
      <template #icon>
        <ExclamationTriangleIcon class="h-5 w-5 stroke-2" />
      </template>
      Because the mempool is full, transactions with fees bellow 4 sat/vB will
      be purged.
    </Callout>
    <Callout class="max-w-xs border-blue-400 bg-blue-400 text-blue-700">
      <template #icon>
        <InformationCircleIcon class="h-5 w-5 stroke-2" />
      </template>
      The difficulty is adjusted every 2016 blocks based on the time it took to
      find the previous 2016 blocks.
    </Callout>
    <Callout
      title="The Times 03/Jan/2009"
      class="max-w-xs border-green-400 bg-green-400 text-green-700"
    >
      <template #icon>
        <NewspaperIcon class="h-5 w-5 stroke-2" />
      </template>
    </Callout>
    <Callout class="max-w-xs border-rose-400 bg-rose-400 text-rose-700">
      It's going up forever, Laura.
    </Callout>
  </div>
</template>

<script setup lang="ts">
  import Callout from '../ui/Callout.vue'
  import {
    ExclamationTriangleIcon,
    InformationCircleIcon,
    NewspaperIcon
  } from '@heroicons/vue/24/outline'
</script>

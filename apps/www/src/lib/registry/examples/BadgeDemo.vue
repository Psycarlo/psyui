<template>
  <div class="flex gap-4">
    <Badge class="border-green-500 bg-green-500 font-medium text-green-500">
      High priority
    </Badge>
    <Badge class="border-purple-600 bg-purple-600 text-purple-600">
      9 sat/vB
    </Badge>
    <Badge class="border-red-600 bg-red-600 text-red-600">
      <ArrowDownRightIcon class="h-4 w-4" />
      6.9%
    </Badge>
  </div>
</template>

<script setup lang="ts">
  import Badge from '../ui/Badge.vue'
  import { ArrowDownRightIcon } from '@heroicons/vue/16/solid'
</script>

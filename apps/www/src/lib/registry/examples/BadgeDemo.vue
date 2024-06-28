<template>
  <div class="flex flex-col items-center gap-4">
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
    <div class="flex gap-4">
      <Badge variant="filled" class="bg-blue-700 font-medium text-white">
        Protected
        <ShieldCheckIcon class="h-4 w-4 stroke-2" />
      </Badge>
      <Badge variant="filled" class="bg-red-600 font-medium text-white">
        <Battery50Icon class="h-4 w-4" />
        Battery 50%
      </Badge>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Badge from '../ui/Badge.vue'
  import { ArrowDownRightIcon, Battery50Icon } from '@heroicons/vue/16/solid'
  import { ShieldCheckIcon } from '@heroicons/vue/24/outline'
</script>

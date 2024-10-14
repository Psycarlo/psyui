<template>
  <RadioCardGroup>
    <template #opt1>
      <div class="flex items-center gap-3">
        <span>Cold Card</span>
        <span
          class="border-brand-gray-400 text-brand-gray-800 inline-flex items-center justify-center rounded-md border px-1.5 py-1 text-xs"
        >
          Recommended
        </span>
      </div>
    </template>
    <template #opt2>
      <div class="flex flex-col gap-1.5">
        <span>Blockstream Jade</span>
        <span class="text-brand-gray-800 text-xs">
          Good price and amazing for beginners
        </span>
      </div>
    </template>
  </RadioCardGroup>
</template>

<script setup lang="ts">
  import RadioCardGroup from '../ui/RadioCardGroup.vue'
</script>

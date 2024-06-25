<template>
  <div class="flex flex-col gap-3">
    <button class="group flex items-center gap-1">
      <span>Hover me</span>
      <AnimatedChevron />
    </button>
    <button class="group flex items-center gap-1">
      <AnimatedChevron direction="left" />
      <span>And me</span>
    </button>
  </div>
</template>

<script setup lang="ts">
  import AnimatedChevron from '../ui/AnimatedChevron.vue'
</script>

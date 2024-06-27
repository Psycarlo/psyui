<template>
  <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="light">Light</Button>
    <Button variant="light" class="group gap-1">
      Icon right
      <AnimatedChevron />
    </Button>
    <Button as="a" href="https://github.com/Psycarlo/psyui" target="_blank">
      <CommandLineIcon class="h-5 w-5" />
      GitHub
    </Button>
    <Button disabled>Disabled</Button>
    <Button variant="secondary" loading>Loading</Button>
  </div>
</template>

<script setup lang="ts">
  import Button from '../ui/Button.vue'
  import AnimatedChevron from '../ui/AnimatedChevron.vue'
  import { CommandLineIcon } from '@heroicons/vue/16/solid'
</script>

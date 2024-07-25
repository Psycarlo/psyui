<template>
  <Card class="relative h-56 max-w-md overflow-hidden">
    <Meteors class="bg-brand-primary before:from-brand-primary" />
    <span
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl font-bold drop-shadow-md"
    >
      Meteors
    </span>
  </Card>
</template>

<script setup lang="ts">
  import Card from '../ui/Card.vue'
  import Meteors from '../ui/Meteors.vue'
</script>

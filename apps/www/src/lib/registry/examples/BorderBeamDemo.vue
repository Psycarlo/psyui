<template>
  <Card
    class="relative flex h-[200px] w-[350px] items-center justify-center rounded-xl border"
  >
    <span class="text-5xl font-bold">Bitcoin</span>
    <BorderBeam />
  </Card>
</template>

<script setup lang="ts">
  import BorderBeam from '../ui/BorderBeam.vue'
  import Card from '../ui/Card.vue'
</script>

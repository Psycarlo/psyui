<template>
  <NumberTicker
    :value="420.69"
    :delay="1.5"
    :decimals="2"
    :duration="6"
    class="font-mono text-5xl font-bold"
  />
</template>

<script setup lang="ts">
  import NumberTicker from '../ui/NumberTicker.vue'
</script>

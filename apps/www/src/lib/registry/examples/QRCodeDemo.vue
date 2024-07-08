<template>
  <ClientQRCode value="bitcoin:1111111111111111111114oLvT2" />
</template>

<script setup lang="ts">
  import { defineClientComponent } from 'vitepress'

  const ClientQRCode = defineClientComponent(() => {
    return import('../ui/QRCode.vue')
  })
  // https://github.com/vuejs/vitepress/issues/3610
  // Import QRCode normally if you are not using SSR.
</script>

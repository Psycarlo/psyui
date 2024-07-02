<template>
  <Sonner v-bind="sonnerProps" />
</template>

<script setup lang="ts">
  import {
    Toaster as Sonner,
    type ToasterProps as SonnerProps
  } from 'vue-sonner'

  const sonnerProps = defineProps<SonnerProps>()
</script>

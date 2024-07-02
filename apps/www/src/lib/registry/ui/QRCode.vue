<template>
  <span>todo</span>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { computed, type HTMLAttributes } from 'vue'

  type QRCodeProps = {
    value: string
    class?: HTMLAttributes['class']
  }

  const props = defineProps<QRCodeProps>()
</script>

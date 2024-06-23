<template>
  <Component :is="Component" />
</template>

<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'
  import Spinner from './Spinner.vue'

  const props = defineProps<{
    name: string
    icon?: boolean
  }>()

  const Component = defineAsyncComponent({
    loadingComponent: Spinner,
    loader: () =>
      import(`../../../src/lib/registry/examples/${props.name}.vue`),
    timeout: 5000
  })
</script>

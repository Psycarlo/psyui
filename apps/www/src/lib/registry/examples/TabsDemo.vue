<template>
  <Tabs defaultValue="tab1">
    <template #trigger1> Trigger 1 </template>
    <template #trigger2> Trigger 2 </template>
    <template #content1> Content 1 </template>
    <template #content2> Content 2 </template>
  </Tabs>
</template>

<script setup lang="ts">
  import Tabs from '../ui/Tabs.vue'
</script>

<template>
  <div class="flex gap-4">
    <Kbd :keys="['command']"> B </Kbd>
    <Kbd variant="ghost" :keys="['command', 'shift']"> T </Kbd>
    <Kbd :keys="['option', 'command']"> C </Kbd>
  </div>
</template>

<script setup lang="ts">
  import Kbd from '../ui/Kbd.vue'
</script>

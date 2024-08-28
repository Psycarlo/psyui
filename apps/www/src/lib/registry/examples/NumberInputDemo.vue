<template>
  <NumberInput
    v-model="value"
    placeholder="Amount..."
    :min="0"
    :max="69"
    class="max-w-[280px]"
  />
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import NumberInput from '../ui/NumberInput.vue'

  const value = ref<number>()
</script>

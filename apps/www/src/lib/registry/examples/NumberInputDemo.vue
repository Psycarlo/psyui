<template>
  <div class="flex flex-col gap-3">
    <NumberInput v-model="value" :min="0" :max="420" class="max-w-[280px]" />
    <NumberInput
      v-model="value2"
      placeholder="Amount..."
      :min="0"
      :max="69"
      class="max-w-[280px]"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import NumberInput from '../ui/NumberInput.vue'

  const value = ref<number>(69)
  const value2 = ref<number>()
</script>

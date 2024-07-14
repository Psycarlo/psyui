<template>
  <div class="grid grid-cols-3 gap-6">
    <Checkbox v-model="checkboxState1" />
    <Checkbox v-model="checkboxState2" />
    <Checkbox variant="secondary" v-model="checkboxState3" />
    <div class="col-span-3 flex items-center justify-center gap-2">
      <Checkbox id="fees" v-model="checkboxState4" sr="Show fees" />
      <label class="select-none whitespace-nowrap text-sm" for="fees">
        Show fees
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Checkbox from '../ui/Checkbox.vue'

  const checkboxState1 = ref(false)
  const checkboxState2 = ref(true)
  const checkboxState3 = ref('indeterminate')
  const checkboxState4 = ref(true)
</script>

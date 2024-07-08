<template>
  <div class="flex flex-col items-center gap-4">
    <div class="flex gap-4">
      <Switch v-model="isSwitch1On" sr="Enable RBF" />
      <Switch v-model="isSwitch2On" variant="secondary" sr="Enable RBF" />
      <Switch
        v-model="isSwitch3On"
        variant="secondary"
        sr="Enable RBF"
        disabled
      />
    </div>
    <div class="flex items-center gap-2">
      <label class="select-none text-sm" for="rbf">Enable RBF</label>
      <Switch id="rbf" v-model="isSwitch4On" sr="Enable RBF" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Switch from '../ui/Switch.vue'

  const isSwitch1On = ref(false)
  const isSwitch2On = ref(true)
  const isSwitch3On = ref(true)
  const isSwitch4On = ref(false)
</script>

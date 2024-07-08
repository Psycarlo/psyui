<template>
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
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Switch from '../ui/Switch.vue'

  const isSwitch1On = ref(false)
  const isSwitch2On = ref(true)
  const isSwitch3On = ref(true)
</script>

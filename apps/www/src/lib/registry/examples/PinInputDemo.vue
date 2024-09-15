<template>
  <div class="flex flex-col gap-1">
    <label for="pin" class="text-sm font-bold">Wallet Pin</label>
    <PinInput id="pin" mask />
  </div>
</template>

<script setup lang="ts">
  import PinInput from '../ui/PinInput.vue'
</script>

<template>
  <div class="flex gap-4">
    <Button @click="toast('Block has been mined')">Mine a block</Button>
    <Button variant="destructive" @click="toast.error('Transaction cancelled')">
      Cancel transaction
    </Button>
  </div>
</template>

<script setup lang="ts">
  import { toast } from 'vue-sonner'
  import Button from '../ui/Button.vue'
</script>

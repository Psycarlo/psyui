<template>
  <div class="flex flex-col gap-4">
    <Button
      @click="
        toast('Block has been mined', {
          action: { label: 'See more', onClick: () => {} }
        })
      "
    >
      Mine a block
    </Button>
    <Button
      variant="secondary"
      @click="
        toast.success('Transaction sent', { description: 'January 3rd, 2009' })
      "
    >
      Send transaction
    </Button>
    <Button
      variant="destructive"
      @click="
        toast('Transaction cancelled', {
          cancel: { label: 'Revert', onClick: () => {} }
        })
      "
    >
      Cancel transaction
    </Button>
  </div>
</template>

<script setup lang="ts">
  import { toast } from 'vue-sonner'
  import Button from '../ui/Button.vue'
</script>

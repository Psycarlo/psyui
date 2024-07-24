<template>
  <div class="flex flex-col gap-3">
    <TextInput v-model="textInputValue1" />
    <TextInput v-model="textInputValue2" variant="outline" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import TextInput from '../ui/TextInput.vue'

  const textInputValue1 = ref('')
  const textInputValue2 = ref('satoshi@vistomail.com')
</script>

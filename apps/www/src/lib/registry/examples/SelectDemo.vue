<template>
  <div class="flex flex-col gap-4">
    <Select
      v-model="network"
      :options="networks"
      placeholder="Select a network..."
      class="w-60"
    />
    <Select
      v-model="network2"
      :options="groupedNetworks"
      groupChildrenKey="items"
      placeholder="Select a network..."
      class="w-60"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Select from '../ui/Select.vue'

  const network = ref()
  const network2 = ref()
  const networks = ref([
    { label: 'Bitcoin', value: 'BTC' },
    { label: 'Lightning Network', value: 'LN' },
    { label: 'Liquid Network', value: 'LQN', disabled: true }
  ])
  const groupedNetworks = ref([
    { label: 'Layer 1', items: [{ label: 'Bitcoin', value: 'BTC' }] },
    {
      label: 'Layer 2',
      items: [
        { label: 'Lightning Network', value: 'LN' },
        { label: 'Liquid Network', value: 'LQN', disabled: true }
      ]
    }
  ])
</script>

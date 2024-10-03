<template>
  <Accordion class="max-w-md" defaultValue="item1">
    <template #trigger1>
      <span class="inline-flex items-center gap-2 text-sm font-medium">
        <Icon icon="mdi:bitcoin" class="size-5" />
        Bitcoin
      </span>
    </template>
    <template #trigger2>
      <span class="inline-flex items-center gap-2 text-sm font-medium">
        <Icon icon="mdi:lightning-bolt-circle" class="size-5" />
        Lightning
      </span>
    </template>
    <template #trigger3>
      <span class="inline-flex items-center gap-2 text-sm font-medium">
        <Icon icon="mdi:pizza" class="size-5" />
        Pizza Day
      </span>
    </template>
    <template #content1>
      <span class="text-brand-gray-1000 text-sm">
        A Peer-to-Peer Electronic Cash System. Launched in January 3rd 2009 by
        Satoshi Nakamoto.
      </span>
    </template>
    <template #content2>
      <span class="text-brand-gray-1000 text-sm">
        The Lightning Network is a payment protocol built on the Bitcoin
        blockchain. Fast transactions.
      </span>
    </template>
    <template #content3>
      <span class="text-brand-gray-1000 text-sm">
        On May 22, 2010, a programmer named Laszlo Hanyecz made history by
        spending 10,000 Bitcoins to have two Papa John's pizzas delivered to his
        door.
      </span>
    </template>
  </Accordion>
</template>

<script setup lang="ts">
  import Accordion from '../ui/Accordion.vue'
  import { Icon } from '@iconify/vue'
</script>

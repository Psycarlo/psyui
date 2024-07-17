<template>
  <div class="flex flex-col gap-4">
    <Tabs defaultValue="tab1" class="max-w-md">
      <template #trigger1> Bitcoin </template>
      <template #trigger2> Lightning Network </template>
      <template #content1>
        A Peer-to-Peer Electronic Cash System. Launched in January 3rd 2009 by
        Satoshi Nakamoto.
      </template>
      <template #content2>
        The Lightning Network is a payment protocol built on the Bitcoin
        blockchain. Fast transactions.
      </template>
    </Tabs>
    <Tabs defaultValue="tab1" variant="solid" class="max-w-md">
      <template #trigger1> Pizza Day </template>
      <template #trigger2> Whitepaper </template>
      <template #content1>
        On May 22, 2010, a programmer named Laszlo Hanyecz made history by
        spending 10,000 Bitcoins to have two Papa John's pizzas delivered to his
        door.
      </template>
      <template #content2>
        The Bitcoin whitepaper is the original thesis paper written under the
        pseudonym Satoshi Nakamoto on October 31, 2008 that set the basic
        structure of the Bitcoin network.
      </template>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
  import Tabs from '../ui/Tabs.vue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <Card>
      <Tabs defaultValue="tab1" class="max-w-md">
        <template #trigger1> Bitcoin </template>
        <template #trigger2> Lightning Network </template>
        <template #content1>
          <p class="text-sm">
            A Peer-to-Peer Electronic Cash System. Launched in January 3rd 2009
            by Satoshi Nakamoto.
          </p>
        </template>
        <template #content2>
          <p class="text-sm">
            The Lightning Network is a payment protocol built on the Bitcoin
            blockchain. Fast transactions.
          </p>
        </template>
      </Tabs>
    </Card>
    <Card>
      <Tabs defaultValue="tab1" variant="solid" class="max-w-md">
        <template #trigger1> Pizza Day </template>
        <template #trigger2> Whitepaper </template>
        <template #content1>
          <p class="text-sm">
            On May 22, 2010, a programmer named Laszlo Hanyecz made history by
            spending 10,000 Bitcoins to have two Papa John's pizzas delivered to
            his door.
          </p>
        </template>
        <template #content2>
          <p class="text-sm">
            The Bitcoin whitepaper is the original thesis paper written under
            the pseudonym Satoshi Nakamoto on October 31, 2008 that set the
            basic structure of the Bitcoin network.
          </p>
        </template>
      </Tabs>
    </Card>
  </div>
</template>

<script setup lang="ts">
  import Card from '../ui/Card.vue'
  import Tabs from '../ui/Tabs.vue'
</script>

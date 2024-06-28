<template>
  <div class="flex gap-4">
    <Avatar src="https://avatar.vercel.sh/bitcoin.svg?text=BTC" alt="BTC">
      BTC
    </Avatar>
    <Avatar src="nosource" alt="nosource"> BTC </Avatar>
    <Avatar class="bg-brand-gray-400 text-brand-primary font-medium">
      BTC
    </Avatar>
  </div>
</template>

<script setup lang="ts">
  import Avatar from '../ui/Avatar.vue'
</script>

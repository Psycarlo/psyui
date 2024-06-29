<template>
  <div class="flex flex-col items-center gap-4">
    <Shorten
      value="4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"
    />
    <Shorten
      as="a"
      value="1111111111111111111114oLvT2"
      href="https://mempool.space/address/1111111111111111111114oLvT2"
      target="_blank"
      class="hover:underline"
    />
    <Shorten
      value="0411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3"
      :threshold="9"
    />
  </div>
</template>

<script setup lang="ts">
  import Shorten from '../ui/Shorten.vue'
</script>

<template>
  <div class="flex items-center gap-8">
    <Block class="bg-brand-primary mt-6 size-28 animate-pulse"></Block>
    <div class="border-brand-primary mr-4 h-24 w-1 border-l-2 border-dashed" />
    <div class="flex flex-col items-center gap-1">
      <span class="text-brand-secondary mb-6 mr-8 text-sm">69420</span>
      <Block
        class="bg-gradient bg-brand-secondary from-brand-secondaryLight to-brand-secondaryDark size-28 bg-gradient-to-b"
      >
        <div class="flex h-full flex-col items-center justify-center">
          <p class="text-brand-white font-semibold">1.69MB</p>
        </div>
      </Block>
      <Badge
        variant="filled"
        class="bg-brand-secondary text-brand-white text-xs font-medium"
      >
        PsyUI Pool
      </Badge>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Badge from '../ui/Badge.vue'
  import Block from '../ui/Block.vue'
</script>

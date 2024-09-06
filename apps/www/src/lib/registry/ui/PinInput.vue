<template>
  <PinInputRoot class="flex items-center gap-1.5">
    <PinInputInput
      v-for="(id, index) in props.characters"
      :key="id"
      :index="index"
      :class="pinInputClass"
    />
  </PinInputRoot>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed } from 'vue'
  import { PinInputInput, PinInputRoot } from 'radix-vue'

  type PinInputProps = {
    characters?: number
    class?: HTMLAttributes
  }

  const props = withDefaults(defineProps<PinInputProps>(), {
    characters: 4
  })

  const pinInputClass = computed(() =>
    tv({
      base: 'border-brand-gray-300 size-10 rounded-md border text-center'
    })()
  )

  const model = defineModel({ type: Array })
</script>

<template>
  <input v-model="model" :class="textInputClass" />
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { computed, type HTMLAttributes } from 'vue'

  type TextInputProps = {
    variant?: 'filled' | 'outline'
    disabled?: boolean
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<TextInputProps>(), {
    variant: 'filled'
  })

  const textInputClass = computed(() =>
    tv({
      base: 'text-brand-dark placeholder:text-brand-gray-700 w-full truncate rounded-md px-3 py-2 text-sm shadow-sm outline-none',
      variants: {
        variant: {
          filled: 'bg-brand-gray-100',
          outline: 'border-brand-gray-300 border'
        }
      }
    })(props)
  )

  const model = defineModel({ type: String })
</script>

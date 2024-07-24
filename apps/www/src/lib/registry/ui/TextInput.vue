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
      base: '',
      variants: {
        variant: {
          filled: '',
          outline: ''
        }
      }
    })
  )

  const model = defineModel({ type: String })
</script>

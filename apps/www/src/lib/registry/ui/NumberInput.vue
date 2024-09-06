<template>
  <NumberFieldRoot
    v-model="model"
    :min="props.min"
    :max="props.max"
    :class="numberInputClass"
  >
    <NumberFieldInput
      :placeholder="props.placeholder"
      class="placeholder:text-brand-gray-700 w-full px-3 py-2 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
    />
    <div v-if="props.stepper" class="flex justify-center align-middle">
      <NumberFieldDecrement :class="arrowClass">
        <MinusIcon class="size-4" />
      </NumberFieldDecrement>
      <NumberFieldIncrement :class="arrowClass">
        <PlusIcon class="size-4" />
      </NumberFieldIncrement>
    </div>
  </NumberFieldRoot>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed } from 'vue'
  import {
    NumberFieldRoot,
    NumberFieldDecrement,
    NumberFieldIncrement,
    NumberFieldInput
  } from 'radix-vue'
  import { PlusIcon, MinusIcon } from '@heroicons/vue/16/solid'

  type NumberInputProps = {
    placeholder?: string
    min?: number
    max?: number
    disabled?: boolean
    stepper?: boolean
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<NumberInputProps>(), {
    stepper: true
  })

  const numberInputClass = computed(() =>
    tv({
      base: 'bg-brand-white border-brand-gray-300 relative inline-flex w-full items-center justify-between gap-2 truncate rounded-md border text-sm shadow-sm outline-none'
    })(props)
  )

  const arrowClass = computed(() =>
    tv({
      base: 'text-brand-gray-700 group mx-auto flex border-l border-inherit p-2.5',
      variants: {
        disabled: {
          false: 'hover:text-brand-gray-900'
        }
      }
    })(props)
  )

  const model = defineModel({ type: Number })
</script>

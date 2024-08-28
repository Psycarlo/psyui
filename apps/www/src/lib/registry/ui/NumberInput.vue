<template>
  <div class="relative w-full" :class="numberInputClass">
    <input
      v-model="model"
      v-bind="$attrs"
      type="number"
      :min="props.min"
      :max="props.max"
      :disabled="props.disabled"
      class="w-full px-3 py-2 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
    />
    <div v-if="props.stepper" class="flex justify-center align-middle">
      <button :class="arrowClass" @click="decrement">
        <MinusIcon class="size-4" />
      </button>
      <button :class="arrowClass" @click="increment">
        <PlusIcon class="size-4" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed } from 'vue'
  import { PlusIcon, MinusIcon } from '@heroicons/vue/16/solid'

  type NumberInputProps = {
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
      base: 'bg-brand-white border-brand-gray-300 inline-flex w-full items-center justify-between gap-2 truncate rounded-md border text-sm shadow-sm outline-none'
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

  const model = defineModel({ type: Number }) // TODO: when user clears, it becomes string ""
  // Use Radix Vue  https://www.radix-vue.com/components/number-field.html#number-field

  function decrement() {
    if (model.value !== undefined) {
      if (props.min && model.value > props.min) return model.value--
      else if (props.min === undefined) return model.value--
    }
    model.value = model.value !== undefined ? model.value - 1 : props.min || -1
  }

  function increment() {
    if (model.value !== undefined) {
      if (props.max && model.value < props.max) return model.value++
      else if (props.max === undefined) return model.value++
    }
    model.value = model.value !== undefined ? model.value + 1 : props.min || 1
  }

  // https://dribbble.com/shots/22959995-Number-Inputs
</script>

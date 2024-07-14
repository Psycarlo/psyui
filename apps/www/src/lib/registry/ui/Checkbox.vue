<template>
  <CheckboxRoot
    v-model:checked="model"
    :disabled="props.disabled"
    :class="checkboxClass"
    @update:checked="(value) => $emit('update:checked', value)"
  >
    <span v-if="props.sr" class="sr-only">{{ sr }}</span>
    <CheckboxIndicator>
      <svg
        v-if="model === true"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        class="size-4"
      >
        <path
          d="M11.2 5.59998L6.79999 9.99998L4.79999 7.99998"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
      </svg>
      <svg
        v-if="model === 'indeterminate'"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        class="size-4"
      >
        <line
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          x1="4"
          x2="12"
          y1="8"
          y2="8"
        ></line>
      </svg>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import {
    CheckboxRoot,
    CheckboxIndicator,
    type CheckboxRootProps
  } from 'radix-vue'
  import { computed, type HTMLAttributes } from 'vue'

  type CheckboxProps = {
    variant?: 'primary' | 'secondary'
    sr?: string
    disabled?: boolean
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<CheckboxProps>(), {
    variant: 'primary'
  })

  const checkboxClass = computed(() =>
    tv({
      base: 'text-brand-white bg-brand-white ring-brand-gray-300 data-[disabled]:text-brand-gray-400 data-[disabled]:ring-brand-gray-300 inline-flex size-5 shrink-0 appearance-none items-center justify-center rounded shadow-sm outline-none ring-1 ring-inset transition duration-100 data-[disabled]:bg-gray-100 enabled:data-[state=checked]:ring-0 enabled:data-[state=indeterminate]:ring-0 enabled:data-[state=checked]:ring-transparent enabled:data-[state=indeterminate]:ring-transparent',
      variants: {
        variant: {
          primary:
            'data-[state=checked]:bg-brand-primary data-[state=indeterminate]:bg-brand-primary',
          secondary:
            'data-[state=checked]:bg-brand-secondary data-[state=indeterminate]:bg-brand-secondary'
        },
        disabled: {
          true: ''
        }
      }
    })(props)
  )

  const model = defineModel<CheckboxRootProps['checked']>()
  defineEmits(['update:checked'])
</script>

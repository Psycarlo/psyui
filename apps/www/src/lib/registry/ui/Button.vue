<template>
  <component
    :is="props.as"
    :class="buttonClass"
    :disabled="props.disabled || props.loading"
  >
    <span
      class="inline-flex shrink-0 items-center gap-1.5"
      :class="{ invisible: props.loading }"
    >
      <slot />
    </span>
    <svg
      v-show="props.loading"
      class="absolute mt-0.5 h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="2"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  </component>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed, type Component } from 'vue'

  type ButtonProps = {
    as?: string | Component
    variant?:
      | 'primary'
      | 'secondary'
      | 'destructive'
      | 'outline'
      | 'ghost'
      | 'light'
    disabled?: boolean
    loading?: boolean
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    as: 'button',
    variant: 'primary',
    disabled: false,
    loading: false
  })

  const buttonClass = computed(() =>
    tv({
      base: 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium outline-none',
      variants: {
        variant: {
          primary: 'bg-brand-primary hover:bg-brand-primaryDark',
          secondary: 'bg-brand-secondary hover:bg-brand-secondaryDark',
          destructive: 'bg-brand-danger hover:bg-brand-dangerDark',
          outline:
            'border-brand-primary hover:bg-brand-primary/5 text-brand-primary hover:text-brand-primaryDark border',
          ghost: 'text-brand-primary hover:bg-brand-primary/5',
          light: 'text-brand-primary'
        },
        disabled: {
          true: 'pointer-events-none opacity-50'
        },
        loading: {
          true: 'pointer-events-none opacity-50'
        }
      },
      compoundVariants: [
        {
          variant: ['primary', 'secondary', 'destructive'],
          class: 'text-brand-white'
        }
      ]
    })(props)
  )
</script>

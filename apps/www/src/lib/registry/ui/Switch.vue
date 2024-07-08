<template>
  <SwitchRoot
    v-model:checked="model"
    :disabled="props.disabled"
    :class="switchClass"
  >
    <span v-if="props.sr" class="sr-only">{{ sr }}</span>
    <SwitchThumb
      class="bg-brand-white inline-block h-4 w-4 transform rounded-full transition duration-200 ease-in-out will-change-transform data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-1"
    />
  </SwitchRoot>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { SwitchRoot, SwitchThumb } from 'radix-vue'
  import { computed, type HTMLAttributes } from 'vue'

  type SwitchProps = {
    variant?: 'primary' | 'secondary'
    sr?: string
    disabled?: boolean
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<SwitchProps>(), {
    variant: 'primary'
  })

  const switchClass = computed(() =>
    tv({
      base: 'data-[state=unchecked]:bg-brand-gray-300 inline-flex h-6 w-12 items-center rounded-full transition-colors duration-200 focus:outline-none',
      variants: {
        variant: {
          primary: 'bg-brand-primary',
          secondary: 'bg-brand-secondary'
        },
        disabled: {
          true: 'bg-opacity-25'
        }
      }
    })(props)
  )

  const model = defineModel({ type: Boolean })
</script>

<template>
  <Switch
    v-model="model"
    :disabled="props.disabled"
    :class="[switchClass, model ? 'opacity-100' : 'opacity-50']"
  >
    <span v-if="props.sr" class="sr-only">{{ sr }}</span>
    <span
      :class="model ? 'translate-x-7' : 'translate-x-1'"
      class="bg-brand-light inline-block h-4 w-4 transform rounded-full opacity-100 transition"
    />
  </Switch>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { Switch } from '@headlessui/vue'
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
      base: 'inline-flex h-6 w-12 items-center rounded-full',
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

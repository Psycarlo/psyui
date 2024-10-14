<template>
  <RadioGroupRoot class="grid gap-2">
    <RadioGroupItem
      v-for="(_, index) in Object.keys($slots)"
      :value="`opt${index + 1}`"
      :class="radioGroupItemClass"
    >
      <div
        class="group-data-[state=checked]:bg-brand-primary relative mt-0.5 flex size-4 shrink-0 appearance-none items-center justify-center rounded-full border shadow-sm outline-none group-data-[state=checked]:border-0 group-data-[state=checked]:border-transparent"
      >
        <RadioGroupIndicator class="flex items-center justify-center">
          <div class="bg-brand-white size-1.5 shrink-0 rounded-full" />
        </RadioGroupIndicator>
      </div>
      <slot :name="`opt${index + 1}`" />
    </RadioGroupItem>
  </RadioGroupRoot>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import {
    RadioGroupIndicator,
    RadioGroupItem,
    RadioGroupRoot
  } from 'radix-vue'
  import { type HTMLAttributes, computed } from 'vue'

  type RadioCardGroupProps = {
    class?: HTMLAttributes['class']
  }

  const props = defineProps<RadioCardGroupProps>()

  const radioGroupItemClass = computed(() =>
    tv({
      base: 'border-brand-gray-300 data-[state=checked]:border-brand-primary group relative flex w-full items-start gap-3 rounded-md border p-4 text-left text-sm shadow-sm outline-none transition'
    })(props)
  )
</script>

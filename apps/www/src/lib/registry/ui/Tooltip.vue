<template>
  <TooltipProvider :delay-duration="props.delay">
    <TooltipRoot>
      <TooltipTrigger>
        <slot />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          :side-offset="6"
          :side="props.placement"
          class="text-brand-light max-w-xs rounded-md px-2 py-1"
          :class="{
            'bg-brand-primary': props.variant === 'primary',
            'bg-brand-dark': props.variant === 'dark'
          }"
        >
          <slot name="content" />
          <TooltipArrow
            :class="{
              'fill-brand-primary': props.variant === 'primary',
              'fill-brand-dark': props.variant === 'dark'
            }"
            :height="6"
            :width="8"
          />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { tv } from 'tailwind-variants'
  import {
    TooltipArrow,
    TooltipContent,
    TooltipPortal,
    TooltipProvider,
    TooltipRoot,
    TooltipTrigger,
    type TooltipContentProps
  } from 'radix-vue'

  type TooltipProps = {
    variant?: 'primary' | 'dark'
    placement?: TooltipContentProps['side']
    distance?: number
    delay?: number
  }

  const props = withDefaults(defineProps<TooltipProps>(), {
    variant: 'dark',
    placement: 'top',
    distance: 16,
    delay: 0
  })
</script>

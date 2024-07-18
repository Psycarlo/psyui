<template>
  <div
    :class="borderBeamClass"
    :style="{
      '--size': props.size,
      '--duration': props.duration,
      '--anchor': props.anchor,
      '--border-width': props.borderWidth,
      '--color-from': props.colorFrom,
      '--color-to': props.colorTo,
      '--delay': `-${props.delay}s`
    }"
  />
</template>

<script lang="ts">
  import resolveConfig from 'tailwindcss/resolveConfig'
  import tailwindConfig from '../../../../tailwind.config.js'

  const twConfig = resolveConfig(tailwindConfig)
</script>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed } from 'vue'

  type BorderBeamProps = {
    size?: number
    duration?: number
    anchor?: 90
    borderWidth?: number
    colorFrom?: string
    colorTo?: string
    delay?: number
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<BorderBeamProps>(), {
    size: 200,
    duration: 15,
    anchor: 90,
    borderWidth: 1.5,
    colorFrom: twConfig.theme.colors['brand'].primaryLight,
    colorTo: twConfig.theme.colors['brand'].primary,
    delay: 0
  })

  const borderBeamClass = computed(() =>
    tv({
      base: 'after:animate-borderBeam pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]'
    })(props)
  )
</script>

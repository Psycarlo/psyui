<template>
  <div :class="marqueeClass">
    <div
      v-for="i of props.repeat"
      :key="i"
      class="animate-marquee flex shrink-0 [gap:var(--gap)]"
      :class="{
        'group-hover:[animation-play-state:paused]': props.pauseOnHover,
        '[animation-direction:reverse]': props.reverse
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed } from 'vue'

  type MarqueeProps = {
    pauseOnHover?: boolean
    reverse?: boolean
    repeat?: number
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<MarqueeProps>(), {
    pauseOnHover: false,
    reverse: false,
    repeat: 2
  })

  const marqueeClass = computed(() =>
    tv({
      base: 'group flex overflow-hidden p-2 [--duration:20s] [--gap:1rem] [gap:var(--gap)]'
    })({ class: props.class })
  )
</script>

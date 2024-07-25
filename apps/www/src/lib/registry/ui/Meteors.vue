<template>
  <span
    v-for="index in props.number"
    :key="index"
    :class="meteorsClass"
    :style="{
      top: -5 + 'px',
      left: Math.floor(Math.random() * windowInnerWidth) + 'px',
      animationDelay: Math.random() * 1 + 0.2 + 's',
      animationDuration: Math.floor(Math.random() * 8 + 2) + 's'
    }"
  />
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed } from 'vue'

  type MeteorsProps = {
    number?: number
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<MeteorsProps>(), {
    number: 20
  })

  const meteorsClass = computed(() =>
    tv({
      base: [
        'animate-meteor bg-brand-gray-800 absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] rounded-[9999px] shadow-[0_0_0_1px_#ffffff10]',
        'before:from-brand-gray-800 before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:to-transparent before:content-[""]'
      ]
    })(props)
  )

  const windowInnerWidth = window.innerWidth
</script>

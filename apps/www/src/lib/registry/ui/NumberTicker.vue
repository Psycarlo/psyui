<template>
  <span ref="target" :class="numberTickerClass">
    {{ state.displayNumber }}
  </span>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed, reactive, watch, ref } from 'vue'
  import { useElementVisibility } from '@vueuse/core'
  import anime from 'animejs/lib/anime.es.js'

  type NumberTickerProps = {
    value: number
    direction?: 'up' | 'down'
    duration?: number
    delay?: number
    decimals?: 0 | 1 | 2
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<NumberTickerProps>(), {
    direction: 'up',
    duration: 5,
    delay: 0,
    decimals: 0
  })

  const numberTickerClass = computed(() =>
    tv({ base: 'inline-block tabular-nums' })(props)
  )

  const target = ref(null)
  const targetIsVisible = useElementVisibility(target)
  const wasTriggered = ref(false)

  const state: Record<string, string | number> = reactive({
    tweenedNumber: props.direction === 'down' ? props.value : 0,
    displayNumber: props.direction === 'down' ? props.value : 0
  })

  function formatNumber(n: number | string) {
    if (typeof n === 'string') return Number(n).toFixed(props.decimals)
    return n.toFixed(props.decimals)
  }

  function animate() {
    const instance = anime({
      targets: state,
      duration: props.duration * 1000,
      easing: 'easeOutQuart',
      delay: props.delay * 1000,
      tweenedNumber: formatNumber(props.direction === 'down' ? 0 : props.value),
      update: () => (state.displayNumber = formatNumber(state.tweenedNumber))
    })
    instance.play()
  }

  watch(targetIsVisible, (visible) => {
    if (visible) {
      wasTriggered.value = true
      animate()
    }
  })
</script>

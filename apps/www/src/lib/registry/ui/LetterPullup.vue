<template>
  <div class="flex justify-center" ref="target">
    <div v-for="letter in letters" ref="letterRefs" :class="letterPullupProps">
      <span v-if="letter === ' '">&nbsp;</span>
      {{ letter }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed, ref, watch } from 'vue'
  import { useElementVisibility } from '@vueuse/core'
  import { useMotion } from '@vueuse/motion'

  type LetterPullupProps = {
    value: string
    delay?: number
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<LetterPullupProps>(), {
    delay: 0.05
  })

  const letterPullupProps = computed(() =>
    tv({ base: 'text-brand-black text-4xl font-bold drop-shadow-sm' })(props)
  )

  const letters = props.value.split('')
  const letterRefs = ref()

  const target = ref(null)
  const targetIsVisible = useElementVisibility(target)
  const wasTriggered = ref(false)

  function animate() {
    for (let i = 0; i < letters.length; i++) {
      useMotion(letterRefs.value[i], {
        initial: { y: 100, opacity: 0 },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            delay: i * props.delay * 1000
          }
        }
      })
    }
  }

  watch(targetIsVisible, (visible) => {
    if (!wasTriggered.value && visible) {
      wasTriggered.value = true
      animate()
    }
  })
</script>

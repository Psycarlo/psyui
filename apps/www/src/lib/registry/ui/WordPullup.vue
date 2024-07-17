<template>
  <div class="flex justify-center" ref="target">
    <div v-for="word in words" ref="wordRefs" :class="letterPullupProps">
      {{ word }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed, ref, watch } from 'vue'
  import { useElementVisibility } from '@vueuse/core'
  import { useMotion } from '@vueuse/motion'

  type WordPullupProps = {
    value: string
    delay?: number
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<WordPullupProps>(), {
    delay: 0.25
  })

  const letterPullupProps = computed(() =>
    tv({ base: 'text-brand-black pr-2 text-4xl font-bold drop-shadow-sm' })(
      props
    )
  )

  const words = props.value.split(' ')
  const wordRefs = ref()

  const target = ref(null)
  const targetIsVisible = useElementVisibility(target)
  const wasTriggered = ref(false)

  function animate() {
    for (let i = 0; i < words.length; i++) {
      useMotion(wordRefs.value[i], {
        initial: { y: 20, opacity: 0 },
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

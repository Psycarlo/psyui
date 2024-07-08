<template>
  <div
    :style="{ transform: 'rotateY(-20deg)', 'transform-style': 'preserve-3d' }"
    class="relative"
  >
    <!-- <Icon icon="mdi:bitcoin" class="text-brand-primary size-12" />
    <Icon icon="mdi:github" class="text-brand-primary size-12" />
    <Icon icon="mdi:vuejs" class="text-brand-primary size-12" />
    <Icon icon="mdi:tailwind" class="text-brand-primary size-12" />
    <Icon icon="mdi:lightning-bolt" class="text-brand-primary size-12" /> -->

    <transition :css="false" @leave="(_, done) => leaveTop(done)">
      <div
        ref="topRef"
        :style="{
          'clip-path': 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
          'backface-visibility': 'hidden',
          'z-index': -1
        }"
        class="absolute left-1/2 top-1/2"
      >
        <div
          v-show="index === 0"
          class="relative grid h-36 w-52 place-content-center rounded-lg bg-orange-300 text-6xl text-neutral-50"
        >
          <Icon icon="mdi:bitcoin" class="text-brand-dark size-20" />
          <div
            class="bg-brand-white absolute inset-x-0 top-1/2 h-[2px] w-full -translate-y-1/2"
          />
        </div>
        <div
          v-show="index === 1"
          class="relative grid h-36 w-52 place-content-center rounded-lg bg-blue-300 text-6xl text-neutral-50"
        >
          <Icon icon="mdi:github" class="text-brand-dark size-20" />
          <div
            class="bg-brand-white absolute inset-x-0 top-1/2 h-[2px] w-full -translate-y-1/2"
          />
        </div>
      </div>
    </transition>
    <transition :css="false" @leave="(_, done) => leaveBottom(done)">
      <div
        ref="bottomRef"
        :style="{
          'clip-path': 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
          'backface-visibility': 'hidden',
          'z-index': 1
        }"
        class="absolute left-1/2 top-1/2"
      >
        <div
          class="relative grid h-36 w-52 place-content-center rounded-lg bg-orange-300 text-6xl text-neutral-50"
          v-if="index === 0"
        >
          <Icon icon="mdi:bitcoin" class="text-brand-dark size-20" />
          <div
            class="bg-brand-white absolute inset-x-0 top-1/2 h-[2px] w-full -translate-y-1/2"
          />
        </div>
        <div
          v-show="index === 1"
          class="relative grid h-36 w-52 place-content-center rounded-lg bg-blue-300 text-6xl text-neutral-50"
        >
          <Icon icon="mdi:github" class="text-brand-dark size-20" />
          <div
            class="bg-brand-white absolute inset-x-0 top-1/2 h-[2px] w-full -translate-y-1/2"
          />
        </div>
      </div>
    </transition>
  </div>
  <button @click="handleClick" class="ml-32">Click</button>
  <button @click="handleClick2">Click 2</button>
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { type HTMLAttributes, computed, ref, watch } from 'vue'
  import { useMotion } from '@vueuse/motion'

  type OrigamiProps = {
    duration?: number
    delay?: number
  }

  const props = withDefaults(defineProps<OrigamiProps>(), {
    duration: 2.5,
    delay: 1.5
  })

  const topRef = ref()
  const bottomRef = ref()

  const { leave: leaveTop } = useMotion(topRef, {
    initial: {
      y: '-50%',
      x: '-50%',
      rotateX: '0deg'
    },
    enter: {
      rotateX: '0deg',
      transition: {
        duration: 1500,
        ease: 'easeInOut'
      }
    },
    leave: {
      rotateX: '-180deg',
      transition: {
        duration: 2500,
        ease: 'easeInOut'
      }
    }
  })

  const {
    leave: leaveBottom,
    set,
    apply
  } = useMotion(bottomRef, {
    initial: {
      y: '-50%',
      x: '-50%',
      rotateX: '180deg'
    },
    enter: {
      rotateX: '0deg',
      transition: {
        duration: 1500,
        ease: 'easeInOut'
      }
    },
    leave: {
      rotateX: '180deg',
      transition: {
        duration: 2500,
        ease: 'easeInOut'
      }
    }
  })

  const index = ref(0)
  function handleClick() {
    leaveBottom(() => {
      index.value = index.value + 1
      apply('enter')
    })
  }

  function handleClick2() {
    leaveTop(() => {})
    index.value = index.value + 1
  }
</script>

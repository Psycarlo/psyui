<template>
  <AvatarRoot>
    <AvatarImage :src="props.src" :alt="props.alt" :class="avatarClass" />
    <AvatarFallback :class="avatarClass">
      <slot />
    </AvatarFallback>
  </AvatarRoot>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { AvatarFallback, AvatarImage, AvatarRoot } from 'radix-vue'
  import { type HTMLAttributes, computed } from 'vue'

  type AvatarProps = {
    src?: string
    alt?: string
    class?: HTMLAttributes['class']
  }

  const props = defineProps<AvatarProps>()

  const avatarClass = computed(() =>
    tv({
      base: 'bg-brand-primaryLight inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white'
    })(props)
  )
</script>

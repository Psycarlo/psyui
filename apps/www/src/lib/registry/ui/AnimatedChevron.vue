<template>
  <svg
    class="stroke-[1.5px]"
    :class="{
      '-mr-1 ml-1.5': props.direction === 'right',
      '-ml-1 mr-1.5': props.direction === 'left'
    }"
    fill="none"
    stroke="currentColor"
    width="11"
    height="11"
    viewBox="0 0 10 10"
    aria-hidden="true"
    :transform="props.direction === 'left' ? 'matrix(-1,0,0,1,0,0)' : undefined"
  >
    <path
      class="opacity-0 transition group-hover:opacity-100"
      d="M0 5h7"
    ></path>
    <path
      class="transition group-hover:translate-x-[3px]"
      d="M1 1l4 4-4 4"
    ></path>
  </svg>
</template>

<script setup lang="ts">
  type AnimatedChevronProps = {
    direction?: 'left' | 'right'
  }

  const props = withDefaults(defineProps<AnimatedChevronProps>(), {
    direction: 'right'
  })
</script>

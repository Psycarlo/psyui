<template>
  <VisXYContainer :class="containerClass">
    <VisLine
      :data="data"
      :x="(d: DataRecord) => d.x"
      :y="(d: DataRecord) => d.y"
      color="#04AA6D"
    />
  </VisXYContainer>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { VisXYContainer, VisLine } from '@unovis/vue'
  import { computed, type HTMLAttributes } from 'vue'

  type DataRecord = { x: number; y: number }

  const props = defineProps<{
    data: DataRecord[]
    class?: HTMLAttributes['class']
  }>()

  const containerClass = computed(() =>
    tv({
      base: 'h-[40px] !w-[144px]'
    })({ class: props.class })
  )
</script>

<template>
  <a class="group flex flex-col gap-2">
    <Card>
      <slot />
    </Card>
    <div class="flex items-center gap-1">
      <p>{{ props.title }}</p>
      <ChevronRight />
    </div>
  </a>
</template>

<script setup lang="ts">
  import ChevronRight from '@/lib/registry/ui/animated-icons/ChevronRight.vue'
  import Card from '@/lib/registry/ui/Card.vue'

  type ComponentCardProps = {
    title: string
  }

  const props = defineProps<ComponentCardProps>()
</script>

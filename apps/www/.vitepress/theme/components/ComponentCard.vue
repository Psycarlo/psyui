<template>
  <a class="group flex flex-col gap-2">
    <Card
      class="ring-brand-primaryLight/10 group aspect-[2/1] overflow-hidden transition-all group-hover:ring-4"
    >
      <img
        :src="props.img"
        :alt="title"
        class="absolute inset-0 h-full w-full transition-all group-hover:scale-[102%]"
        width="768"
        height="384"
        decoding="async"
      />
    </Card>
    <div class="flex items-center gap-1">
      <p>{{ props.title }}</p>
      <ChevronRight />
    </div>
  </a>
</template>

<script setup lang="ts">
  import ChevronRight from '@/lib/registry/ui/AnimatedChevron.vue'
  import Card from '@/lib/registry/ui/Card.vue'

  type ComponentCardProps = {
    title: string
    img: string
  }

  const props = defineProps<ComponentCardProps>()
</script>

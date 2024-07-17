<template>
  <TabsRoot :class="tabsClass">
    <TabsList>
      <TabsTrigger
        v-for="(_, index) in Object.keys($slots).length / 2"
        :value="`tab${index + 1}`"
      >
        <slot :name="`trigger${index + 1}`" />
      </TabsTrigger>
    </TabsList>
    <TabsContent
      v-for="(_, index) in Object.keys($slots).length / 2"
      :value="`tab${index + 1}`"
    >
      <slot :name="`content${index + 1}`" />
    </TabsContent>
  </TabsRoot>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import {
    TabsContent,
    TabsIndicator,
    TabsList,
    TabsRoot,
    TabsTrigger
  } from 'radix-vue'
  import { type HTMLAttributes, computed } from 'vue'

  type TabsProps = {
    class?: HTMLAttributes['class']
  }

  const props = defineProps<TabsProps>()

  const tabsClass = computed(() => tv({ base: 'w-full' })(props))
</script>

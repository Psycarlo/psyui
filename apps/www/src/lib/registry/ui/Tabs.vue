<template>
  <TabsRoot :class="tabsClass">
    <TabsList :class="tabsListClass">
      <TabsTrigger
        v-for="(_, index) in Object.keys($slots).length / 2"
        :value="`tab${index + 1}`"
        :class="tabsTriggerClass"
      >
        <slot :name="`trigger${index + 1}`" />
      </TabsTrigger>
    </TabsList>
    <TabsContent
      v-for="(_, index) in Object.keys($slots).length / 2"
      :value="`tab${index + 1}`"
      class="outline-none"
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
    variant?: 'line' | 'solid'
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<TabsProps>(), {
    variant: 'line'
  })

  const tabsClass = computed(() => tv({ base: '' })(props))

  const tabsListClass = computed(() =>
    tv({
      base: 'items-center',
      variants: {
        variant: {
          line: 'border-brand-gray-300 flex justify-start border-b',
          solid: 'inline-flex justify-center rounded-md p-1'
        }
      }
    })(props)
  )

  const tabsTriggerClass = computed(() =>
    tv({
      base: 'items-center whitespace-nowrap px-3 text-sm font-medium transition-all',
      variants: {
        variant: {
          line: '',
          solid: 'inline-flex rounded py-1'
        }
      }
    })(props)
  )
</script>

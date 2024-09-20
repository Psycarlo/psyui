<template>
  <TabsRoot :class="tabsClass">
    <TabsList :class="tabsListClass">
      <TabsIndicator
        v-if="props.variant === 'line'"
        class="absolute bottom-0 left-0 h-0.5 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300"
      >
        <div class="bg-brand-primary size-full" />
      </TabsIndicator>
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
      class="ml-2 mt-4 outline-none"
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
      base: 'relative items-center px-3 pb-2',
      variants: {
        variant: {
          line: 'border-brand-gray-300 flex justify-start border-b',
          solid: 'bg-brand-primary inline-flex justify-center rounded-md p-1'
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
          solid:
            'data-[state=inactive]:text-brand-gray-100 bg-brand-primary inline-flex py-1 text-white'
        }
      }
    })(props)
  )
</script>

<template>
  <AccordionRoot type="single" collapsible :class="accordionClass">
    <AccordionItem value="item1">
      <AccordionHeader>
        <AccordionTrigger class="group flex items-center">
          Trigger
          <ChevronDownIcon
            v-if="icon"
            class="size-4 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
          />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent
        class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
        >Content</AccordionContent
      >
    </AccordionItem>
    <AccordionItem value="item2">
      <AccordionHeader>
        <AccordionTrigger>Trigger 2</AccordionTrigger>
      </AccordionHeader>
      <AccordionContent>Content 2</AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import {
    AccordionContent,
    AccordionHeader,
    AccordionItem,
    AccordionRoot,
    AccordionTrigger
  } from 'radix-vue'
  import { type HTMLAttributes, computed } from 'vue'
  import { ChevronDownIcon } from '@heroicons/vue/16/solid'

  type AccordionProps = {
    icon?: boolean
    class?: HTMLAttributes['class']
  }

  const props = withDefaults(defineProps<AccordionProps>(), {
    icon: true
  })

  const accordionClass = computed(() => tv({ base: '' })(props))
</script>

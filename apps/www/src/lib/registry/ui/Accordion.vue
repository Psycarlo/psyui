<template>
  <AccordionRoot type="single" collapsible :class="accordionClass">
    <AccordionItem
      v-for="(_, index) in Object.keys($slots).length / 2"
      :value="`item${index + 1}`"
      class="overflow-hidden border-b first:rounded-t last:rounded-b last:border-b-0"
    >
      <AccordionHeader>
        <AccordionTrigger
          class="group flex w-full items-center justify-between px-4 py-3 outline-none"
        >
          <slot :name="`trigger${index + 1}`" />
          <ChevronDownIcon
            v-if="icon"
            class="size-4 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
          />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent
        class="data-[state=open]:animate-accordionDown data-[state=closed]:animate-accordionUp transform-gpu overflow-hidden px-4 pb-3"
      >
        <slot :name="`content${index + 1}`" />
      </AccordionContent>
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

  const accordionClass = computed(() =>
    tv({ base: 'w-full rounded-md border' })(props)
  )
</script>

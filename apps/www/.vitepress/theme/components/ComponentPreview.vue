<template>
  <div class="not-docs flex flex-col gap-6">
    <ul class="border-b border-slate-200 px-1 py-2">
      <li>
        <ExternalLink
          :href="`https://github.com/Psycarlo/psyui/blob/main/apps/www/src/lib/registry/ui/${props.name}.vue`"
        >
          Github
        </ExternalLink>
      </li>
    </ul>
    <TabGroup as="div" class="flex flex-col gap-2">
      <TabList class="flex w-fit gap-2 rounded-md bg-slate-100 p-1" as="div">
        <Tab as="template" v-slot="{ selected }">
          <button
            class="flex items-center gap-1 rounded-md p-2 focus:outline-none"
            :class="{ 'bg-brand-white': selected }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              :class="[
                'size-5',
                selected ? 'stroke-brand-primary' : 'stroke-slate-900'
              ]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span class="text-sm">Preview</span>
          </button>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
          <button
            class="focus:ring-brand-primary flex items-center gap-1 rounded-md px-2 py-1 focus:outline-none"
            :class="{ 'bg-brand-white': selected }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              :class="[
                'size-5',
                selected ? 'stroke-brand-primary' : 'stroke-slate-900'
              ]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg>
            <span class="text-sm">Code</span>
          </button>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel
          class="flex min-h-[350px] items-center justify-center rounded-md border border-slate-200 p-10"
        >
          <ComponentLoader :name="`${props.name}Demo`" />
        </TabPanel>
        <TabPanel class="vp-doc -mt-4">
          <ComponentCode :name="`${props.name}Demo`" />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup lang="ts">
  // TODO: Replace with psyui Tabs component
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  import ComponentLoader from './ComponentLoader.vue'
  import ExternalLink from './ExternalLink.vue'
  import ComponentCode from './ComponentCode.vue'

  type ComponentPreviewProps = {
    name: string
  }

  const props = defineProps<ComponentPreviewProps>()
</script>

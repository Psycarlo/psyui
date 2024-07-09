<template>
  <div class="not-docs flex flex-col gap-6">
    <TabsRoot as="div" class="flex flex-col gap-2" defaultValue="preview">
      <TabsList class="flex w-fit gap-2 rounded-md bg-slate-100 p-1" as="div">
        <TabsTrigger asChild value="preview">
          <button
            class="data-[state=active]:bg-brand-white [&>[data-state=active]>svg]:stroke-brand-primary group flex items-center gap-1 rounded-md p-2 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="group-data-[state=active]:stroke-brand-primary size-5 group-data-[state=inactive]:stroke-slate-900"
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
        </TabsTrigger>
        <TabsTrigger asChild value="code">
          <button
            class="data-[state=active]:bg-brand-white focus:ring-brand-primary group flex items-center gap-1 rounded-md px-2 py-1 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="group-data-[state=active]:stroke-brand-primary size-5 group-data-[state=inactive]:stroke-slate-900"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg>
            <span class="text-sm">Code</span>
          </button>
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="preview"
        class="hidden min-h-[350px] items-center justify-center rounded-md border border-slate-200 data-[state=active]:flex"
      >
        <ComponentLoader :name="`${props.name}Demo`" />
      </TabsContent>
      <TabsContent value="code" class="vp-doc -mt-4">
        <ComponentCode :name="`${props.name}Demo`" />
      </TabsContent>
    </TabsRoot>
  </div>
</template>

<script setup lang="ts">
  // TODO: Replace with psyui Tabs component
  import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
  import ComponentLoader from './ComponentLoader.vue'
  import ComponentCode from './ComponentCode.vue'

  type ComponentPreviewProps = {
    name: string
  }

  const props = defineProps<ComponentPreviewProps>()
</script>

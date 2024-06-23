<template>
  <div class="not-docs">
    <TabGroup>
      <TabList
        class="flex w-fit gap-2 rounded-md bg-slate-100 p-[3px]"
        as="div"
      >
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
            class="focus:ring-brand-primary flex items-center gap-1 rounded-md p-2 focus:outline-none"
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
        <TabPanel>
          <ComponentLoader :name="`${props.name}Demo`" />
        </TabPanel>
        <TabPanel class="vp-doc">
          <div v-if="codeHtml" class="language-vue">
            <button
              title="Copy Code"
              class="copy"
              :class="{ copied }"
              @click="copy(transformedRawString)"
            />
            <div v-html="codeHtml" />
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, computed } from 'vue'
  // TODO: Replace with psyui Tabs component
  import { useClipboard } from '@vueuse/core'
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  import ComponentLoader from './ComponentLoader.vue'
  import { cssVariables } from '../config/shiki'
  import { codeToHtml } from 'shiki'
  import MagicString from 'magic-string'

  type ComponentPreviewProps = {
    name: string
  }

  const props = defineProps<ComponentPreviewProps>()

  const { copy, copied } = useClipboard()

  const rawString = ref('')
  const codeHtml = ref('')
  const transformedRawString = computed(() =>
    transformImportPath(rawString.value)
  )

  function transformImportPath(code: string) {
    const s = new MagicString(code)
    s.replaceAll(`../ui/`, '@/components/')
    return s.toString()
  }

  onMounted(async () => {
    try {
      rawString.value = await import(
        `../../../src/lib/registry/examples/${props.name}Demo.vue?raw`
      ).then((res) => res.default.trim())
      codeHtml.value = await codeToHtml(transformedRawString.value, {
        lang: 'vue',
        theme: cssVariables
      })
    } catch (_) {
      // TODO: handle
    }
  })
</script>

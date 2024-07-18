<template>
  <div v-if="loading" class="flex w-full justify-center py-8">
    <Spinner />
  </div>
  <div v-if="!loading && codeHtml" class="language-vue">
    <button
      title="Copy Code"
      class="copy"
      :class="{ copied }"
      @click="copy(transformedRawString)"
    />
    <div v-html="codeHtml" />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, computed } from 'vue'
  import { useClipboard } from '@vueuse/core'
  import { cssVariables } from '../config/shiki'
  import { codeToHtml } from 'shiki'
  import MagicString from 'magic-string'
  import Spinner from './Spinner.vue'

  type ComponentCodeProps = {
    name: string
    type?: 'examples' | 'ui'
  }

  const props = withDefaults(defineProps<ComponentCodeProps>(), {
    type: 'examples'
  })

  const { copy, copied } = useClipboard()

  const rawString = ref('')
  const codeHtml = ref('')
  const transformedRawString = computed(() =>
    transformImportPath(rawString.value)
  )
  const loading = ref(false)

  function transformImportPath(code: string) {
    const s = new MagicString(code)
    s.replaceAll(`../ui/`, '@/components/')
    s.replaceAll(
      `import tailwindConfig from '../../../../tailwind.config.js'`,
      `import tailwindConfig from '../../tailwind.config.js' // Path to your tailwind.config.js file`
    )
    return s.toString()
  }

  onMounted(async () => {
    loading.value = true
    try {
      rawString.value = await import(
        `../../../src/lib/registry/${props.type}/${props.name}.vue?raw`
      ).then((res) => res.default.trim())
      codeHtml.value = await codeToHtml(transformedRawString.value, {
        lang: 'vue',
        theme: cssVariables
      })
    } catch (_) {
      // TODO: handle
    } finally {
      loading.value = false
    }
  })
</script>

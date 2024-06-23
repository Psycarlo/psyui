<template>
  <div v-if="codeHtml" class="language-vue">
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

  function transformImportPath(code: string) {
    const s = new MagicString(code)
    s.replaceAll(`../ui/`, '@/components/')
    return s.toString()
  }

  onMounted(async () => {
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
    }
  })
</script>

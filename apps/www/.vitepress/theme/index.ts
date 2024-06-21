import Layout from './layout/MainLayout.vue'
import DocsLayout from './layout/DocsLayout.vue'
import './style.css'
import './styles/vp-doc.css'
import type { Theme } from 'vitepress'

// https://vitepress.dev/guide/custom-theme
export default {
  Layout,
  enhanceApp({ app }) {
    app.component('docs', DocsLayout)
  }
} satisfies Theme

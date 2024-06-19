import Layout from './layout/MainLayout.vue'
import './style.css'
import type { Theme } from 'vitepress'

// https://vitepress.dev/guide/custom-theme
export default {
  Layout,
  enhanceApp({ app }) {
    // app.component('docs', Layout)
  }
} satisfies Theme

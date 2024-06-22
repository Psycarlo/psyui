import Layout from './layout/MainLayout.vue'
import DocsLayout from './layout/DocsLayout.vue'
import './style.css'
import './styles/vp-doc.css'
import type { Theme } from 'vitepress'
import * as components from './components'

// https://vitepress.dev/guide/custom-theme
export default {
  Layout,
  enhanceApp({ app }) {
    app.component('docs', DocsLayout)

    for (const component of Object.keys(components))
      app.component(component, components[component])
  }
} satisfies Theme

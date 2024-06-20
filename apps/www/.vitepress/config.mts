import path from 'node:path'
import { defineConfig } from 'vitepress'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { siteConfig } from './theme/config/site'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: siteConfig.name,
  titleTemplate: ':title - psyui',
  description: siteConfig.description,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'shortcut icon', href: '/favicon-16x16.png' }]
  ],
  sitemap: {
    hostname: 'https://psyui.com'
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/Psycarlo/psyui/tree/main/apps/www/src/:path',
      text: 'Edit this page on GitHub'
    }
  },
  lastUpdated: true,
  srcDir: path.resolve(__dirname, '../src'),
  rewrites: { 'content/(.*)': '(.*)' },
  cleanUrls: true,
  vite: {
    css: {
      postcss: {
        plugins: [tailwind(), autoprefixer()]
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src')
      }
    }
  }
})

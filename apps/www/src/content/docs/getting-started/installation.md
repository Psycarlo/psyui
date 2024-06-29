---
title: Installation
description: Everything you need to set up psyui.
---

**Psyui** is designed for Vue and requires Vue `v3+`.

<FrameworkSwitch>
<template #vite>
<Steps>

### Install Tailwind CSS and its peer dependencies

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

For a complete guide, follow the [official documentation](https://tailwindcss.com/docs/guides/vite#vue)

### Tailwind configuration

Add **psyui** required colors:

```js
export default {
  ...,
  theme: {
    ...,
    extend: {
      ...,
      colors: {
        white: '',
        black: '',

        light: '',
        dark: '',

        primary: '',
        primaryLight: '',
        primaryDark: '',

        secondary: '',
        secondaryLight: '',
        secondaryDark: '',

        success: '',
        successLight: '',
        seccessDark: '',
        warning: '',
        warningLight: '',
        warningDark: '',
        danger: '',
        dangerLight: '',
        dangerDark: '',
        info: '',
        infoLight: '',
        infoDark: '',

        gray: {
          50: '',
          100: '',
          200: '',
          300: '',
          400: '',
          500: '',
          600: '',
          700: '',
          800: '',
          900: '',
          1000: '',
          1100: '',
          1200: ''
        }
      }
    }
  }
}
```

### Update path alias

Update your `tsconfig.json` with `baseUrl` and `paths` compiler options:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Copy and paste components

Now it's time to copy and paste the components into your project directory: under `/src/components`.

After adding them, you will import and use them like this:

```vue
<template>
  <Card>Psyui</Card>
</template>

<script setup lang="ts">
  import Card from '@/components/Card.vue'
</script>
```

Go [search](/components) for components.

</Steps>

</template>
<template #nuxt>
<Steps>

### Add Tailwind CSS

```bash
npm install -D @nuxtjs/tailwindcss
```

Add it to nuxt modules:

```ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss']
})
```

For a complete guide, follow the [official documentation](https://tailwindcss.nuxtjs.org/)

### Tailwind configuration

Add **psyui** required colors:

```js
export default {
  ...,
  theme: {
    ...,
    extend: {
      ...,
      colors: {
        white: '',
        black: '',

        light: '',
        dark: '',

        primary: '',
        primaryLight: '',
        primaryDark: '',

        secondary: '',
        secondaryLight: '',
        secondaryDark: '',

        success: '',
        successLight: '',
        seccessDark: '',
        warning: '',
        warningLight: '',
        warningDark: '',
        danger: '',
        dangerLight: '',
        dangerDark: '',
        info: '',
        infoLight: '',
        infoDark: '',

        gray: {
          50: '',
          100: '',
          200: '',
          300: '',
          400: '',
          500: '',
          600: '',
          700: '',
          800: '',
          900: '',
          1000: '',
          1100: '',
          1200: ''
        }
      }
    }
  }
}
```

### Copy and paste components

Now it's time to copy and paste the components into your project directory: under `components`.

Nuxt will auto import your components, so you can just use them like:

```vue
<template>
  <Card>Psyui</Card>
</template>
```

Go [search](/components) for components.

</Steps>

## Monorepo

If you want a monorepo with a ui library package, please check out this boilerplate code:
[Nuxt Monorepo Boilerplate](https://github.com/Psycarlo/nuxt-monorepo-boilerplate)
</template>

</FrameworkSwitch>

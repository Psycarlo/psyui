---
title: Sonner
description: An opinionated toast component.
inspiration: https://sonner.emilkowal.ski/
primitive: https://vue-sonner.vercel.app/
---

<ComponentPreview name="Sonner" />

## Installation

<Steps>

### Install dependencies

```bash
npm install vue-sonner
```

### Add component

Copy and paste the code into your project's component directory.

<ComponentCode name="Sonner" type="ui" />

### Add it to your entry vue file

Render the `Sonner` component in the root of your app.

```vue
<template>
  ...
  <Sonner />
</template>
```

</Steps>

## Usage

Import `toast` from `vue-sonner` and call that function to render a toast:

```ts
import { toast } from 'vue-sonner'

toast('Block has been mined')
```

If you want to customize the colors and use your `tailwind.config.js` **psyui** colors, edit your `Sonner` component - use the `group-[.sonner]:` to style it:

## Customization

```vue
<Sonner
  ...
  :toast-options="{
      classes: {
        ...,
        success: 'group-[.sonner]:text-brand-success',
        warning: 'group-[.sonner]:text-brand-warning',
        error: 'group-[.sonner]:text-brand-danger',
        info: 'group-[.sonner]:text-brand-info',
      }
    }"
/>
```

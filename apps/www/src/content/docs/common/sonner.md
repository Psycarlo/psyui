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

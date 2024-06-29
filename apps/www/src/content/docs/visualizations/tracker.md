---
title: Tracker
description: Component for visualizing data related to monitoring.
inspiration: https://www.tremor.so/docs/visualizations/tracker
---

<ComponentPreview name="Tracker" />

<Steps>

### Install dependencies

```bash
npm install tailwind-variants
```

### Add component

Copy and paste the code into your project's component directory.

<ComponentCode name="Tracker" type="ui" />

</Steps>

## Usage notes

In order to accept a template for each bar tooltip, we use vue `slots`.

Do a `v-for` over the tracker `data` like this:

```vue
<Tracker :data="data">
  <template v-for="(entry, index) in data" #[index]>
    ...
  </template>
</Tracker>
```

Inside the `template` tag, you can put whatever you want.

If you don't want any bar to have a tooltip, just self-close the `Tracker` component:

```vue
<Tracker :data="data" />
```

To hide only some bar tooltips, use the `hidden` tailwind class on the `slot` children:

```vue
<template v-for="(entry, index) in data" #[index]>
  <span :class={ hidden: !entry.tooltip }>{{ entry.tooltip }}</span>
</template>
```

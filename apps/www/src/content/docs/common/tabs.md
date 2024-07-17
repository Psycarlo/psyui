---
title: Table
description: Display data efficiently in a column and row format.
primitive: https://www.radix-vue.com/components/tabs.html
---

<ComponentPreview name="Tabs" />

## Installation

<Steps>

### Install dependencies

```bash
npm install tailwind-variants radix-vue
```

### Add component

Copy and paste the code into your project's component directory.

<ComponentCode name="Tabs" type="ui" />

</Steps>

## Usage notes

In order to accept a template for each trigger and content, we use vue `slots`.

For the triggers, name them `trigger{number}`, and for the contents, name them `content{number}`:

```vue
<Tabs>
  <template #trigger1>
    <span>Trigger</span>
  </template>
  <template #trigger2>
    <span>Trigger 2</span>
  </template>
  <template #content1>
    <span>Content 1</span>
  </template>
  <template #content2>
    <span>Content 2</span>
  </template>
</Tabs>
```

Inside the `template` tag, you can put whatever you want.

Make sure you create the same number of `trigger` and `content` slots.

To define a open item by default, use the `defaultValue` prop with `tab{number}` as the value:

```vue
<Accordion defaultValue="tab1">
  ...
</Accordion>
```

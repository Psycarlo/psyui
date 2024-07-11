---
title: Accordion
description: Vertically stacked headings that reveal a section of additional content.
primitive: https://www.radix-vue.com/components/accordion.html
---

<ComponentPreview name="Accordion" />

## Installation

<Steps>

### Install dependencies

```bash
npm install radix-vue @heroicons/vue
```

### Update tailwind config

Extend your theme and add the accordion animations and the keyframes.

```js
animation: {
  accordionDown: 'accordionDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  accordionUp: 'accordionUp 300ms cubic-bezier(0.87, 0, 0.13, 1)'
},
keyframes: {
  accordionDown: {
    from: { height: 0 },
    to: { height: 'var(--radix-collapsible-content-height)' }
  },
  accordionUp: {
    from: { height: 'var(--radix-collapsible-content-height)' },
    to: { height: 0 }
  }
}
```

### Add component

Copy and paste the code into your project's component directory.

<ComponentCode name="Accordion" type="ui" />

</Steps>

## Usage notes

In order to accept a template for each trigger and content, we use vue `slots`.

For the triggers, name them `trigger{number}`, and for the contents, name them `content{number}`:

```vue
<Accordion>
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
</Accordion>
```

Inside the `template` tag, you can put whatever you want.

Make sure you create the same number of `trigger` and `content` slots.

To define a open item by default, use the `default-value` prop with `item{number}` as the value:

```vue
<Accordion default-value="item1">
  ...
</Accordion>
```

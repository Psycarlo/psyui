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
  slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)'
},
keyframes: {
  slideDown: {
    from: { height: 0 },
    to: { height: 'var(--radix-collapsible-content-height)' }
  },
  slideUp: {
    from: { height: 'var(--radix-collapsible-content-height)' },
    to: { height: 0 }
  }
}
```

### Add component

Copy and paste the code into your project's component directory.

<ComponentCode name="Accordion" type="ui" />

</Steps>

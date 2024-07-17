---
title: Select
description: Choose one item from a list of options.
primitive: https://www.shadcn-vue.com/docs/components/select.html
---

<ComponentPreview name="Select" />

## Installation

<Steps>

### Install dependencies

```bash
npm install tailwind-variants radix-vue @heroicons/vue
```

### Update tailwind config

Extend your theme and add the accordion animations and the keyframes.

```js
animation: {
  selectHide: 'selectHide 150ms cubic-bezier(0.16, 1, 0.3, 1)',
  selectDown: 'selectDown 150ms cubic-bezier(0.16, 1, 0.3, 1)',
  selectLeft: 'selectLeft 150ms cubic-bezier(0.16, 1, 0.3, 1)',
  selectUp: 'selectUp 150ms cubic-bezier(0.16, 1, 0.3, 1)',
  selectRight: 'selectRight 150ms cubic-bezier(0.16, 1, 0.3, 1)'
},
keyframes: {
  selectHide: {
    from: { opacity: '1' },
    to: { opacity: '0' }
  },
  selectDown: {
    from: { opacity: '0', transform: 'translateY(-6px)' },
    to: { opacity: '1', transform: 'translateY(0)' }
  },
  selectLeft: {
    from: { opacity: '0', transform: 'translateX(6px)' },
    to: { opacity: '1', transform: 'translateX(0)' }
  },
  selectUp: {
    from: { opacity: '0', transform: 'translateY(6px)' },
    to: { opacity: '1', transform: 'translateY(0)' }
  },
  selectRight: {
    from: { opacity: '0', transform: 'translateX(-6px)' },
    to: { opacity: '1', transform: 'translateX(0)' }
  }
}
```

### Add component

Copy and paste the code into your project's component directory.

<ComponentCode name="Select" type="ui" />

</Steps>

---
title: Border Beam
description: An animated beam of light which travels along the border of its container.
inspiration: https://magicui.design/docs/components/border-beam
---

<ComponentPreview name="BorderBeam" />

## Installation

<Steps>

### Install dependencies

```bash
npm install tailwind-variants
```

### Add component

Copy and paste the code into your project's component directory.

<ComponentCode name="BorderBeam" type="ui" />

### Update imports

Update the import paths to match your project setup.

### Update tailwind config

Extend your theme and add the border beam animations and the keyframes.

```js
animation: {
  borderBeam: 'borderBeam calc(var(--duration)*1s) infinite linear'
},
keyframes: {
  borderBeam: {
    '100%': {
      'offset-distance': '100%'
    }
  }
}
```

</Steps>

## Usage notes

Place the border beam component inside a tag with `relative` positioning, `width` and `height`:

```vue
<div class="relative h-[200px] w-[350px]">
  <BorderBeam />
</div>
```

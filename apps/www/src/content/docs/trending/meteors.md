---
title: Meteors
description: A meteor shower effect.
inspiration: https://ui.aceternity.com/components/meteors
---

<ComponentPreview name="Meteors" />

## Installation

<Steps>

### Install dependencies

```bash
npm install tailwind-variants
```

Extend your theme and add the marquee animation and the keyframes.

```js
animation: {
  meteor: "meteor 5s linear infinite",
},
keyframes: {
  meteor: {
    "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
    "70%": { opacity: 1 },
    "100%": {
      transform: "rotate(215deg) translateX(-500px)",
      opacity: 0,
    },
  },
}
```

### Update tailwind config

### Add component

Copy and paste the code into your project's component directory.

<ComponentCode name="Meteors" type="ui" />

</Steps>

## Usage notes

Add `relative` (and optionally `overflow-hidden`) class to the parent:

```vue
<div class="relative overflow-hidden">
  <Meteors />
</div>
```

Customize meteors color by adding `bg-<color>` and `from-<color>` tailwind classes.

```vue
<Meteors :number="25" class="bg-brand-primary before:from-brand-primary" />
```

---
title: Marquee
description: An infinite scrolling component that can be used to display text, images, or videos.
inspiration: https://magicui.design/docs/components/marquee
---

<ComponentPreview name="Marquee" />

## Installation

<Steps>

### Install dependencies

```bash
npm install tailwind-variants
```

### Update tailwind config

Extend your theme and add the marquee animation and the keyframes.

```js
animation: {
  marquee: 'marquee var(--duration) linear infinite'
},
keyframes: {
  marquee: {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(calc(-100% - var(--gap)))' }
  }
}
```

### Add component

Copy and paste the code into your project's component directory.

<ComponentCode name="Marquee" type="ui" />

</Steps>

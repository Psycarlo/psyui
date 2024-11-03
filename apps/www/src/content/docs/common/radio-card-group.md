---
title: Radio Card Group
description: A set of radio buttons with a card styling.
primitive: https://www.radix-vue.com/components/radio-group
inspiration: https://tremor.so/docs/inputs/radio-card-group
---

<ComponentPreview name="RadioCardGroup" />

## Installation

<Steps>

### Install dependencies

```bash
npm install tailwind-variants
```

### Add component

Copy and paste the code into your project's component directory.

<ComponentCode name="RadioCardGroup" type="ui" />

</Steps>

## Usage notes

For each radio you want to add to the group, use vue `slots`.

```vue
<RadioCardGroup>
  <template #trigger1>
    <span>Trigger</span>
    </template>
    <template #trigger2>
    <span>Trigger 2</span>
  </template>
</RadioCardGroup>
```

---
title: Animated Chevron Icon
description: Hover the chevron and it becomes an arrow.
---

<ComponentPreview name="AnimatedChevron" />

## Installation

<Steps>

### Add component

Copy and paste the code into your project's component directory.

<ComponentCode name="AnimatedChevron" type="ui" />

### Update parent class

Animated Chevron uses group-hover to trigger the hover state. Add `group` class to the parent.

```vue
<button class="group">
  <AnimatedChevron />
</button>
```

</Steps>

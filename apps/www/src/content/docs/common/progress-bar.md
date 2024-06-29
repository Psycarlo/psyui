---
title: Progress Bar
description: A bar that indicates progress, performance or status.
inspiration: https://raw.tremor.so/docs/visualizations/progress-bar
---

<ComponentPreview name="ProgressBar" />

## Installation

<Steps>

### Install dependencies

```bash
npm install tailwind-variants
```

### Add component

Copy and paste the code into your project's component directory.

<ComponentCode name="ProgressBar" type="ui" />

### Pass background color

Use background color to style the bar color.

```vue
<ProgressBar :value="progress" class="bg-brand-primary" />
```

</Steps>

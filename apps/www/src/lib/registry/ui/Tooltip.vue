<template>
  <Menu
    :placement="props.placement"
    :distance="props.distance"
    :delay="{ show: props.delayShow, hide: props.delayHide }"
  >
    <template #popper>
      <div class="px-2.5 py-1.5">
        <slot name="content" />
      </div>
    </template>
    <slot />
  </Menu>
</template>

<script setup lang="ts">
  import 'floating-vue/dist/style.css'
  import { tv } from 'tailwind-variants'
  import { Menu, type Placement } from 'floating-vue'

  type TooltipProps = {
    placement?: Placement
    distance?: number
    delayShow?: number
    delayHide?: number
  }

  const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'top',
    distance: 16,
    delayShow: 0,
    delayHide: 500
  })
</script>

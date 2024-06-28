<template>
  <component :is="props.as" :class="kbdClass">
    <abbr
      v-if="keys"
      v-for="key in props.keys"
      :key="key"
      :title="kbdKeysLabelMap[key]"
      class="no-underline"
    >
      {{ kbdKeysMap[key] }}
    </abbr>
    <slot />
  </component>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { tv } from 'tailwind-variants'

  type KbdKey =
    | 'command'
    | 'shift'
    | 'ctrl'
    | 'option'
    | 'enter'
    | 'delete'
    | 'escape'
    | 'tab'
    | 'capslock'
    | 'up'
    | 'right'
    | 'down'
    | 'left'
    | 'pageup'
    | 'pagedown'
    | 'home'
    | 'end'
    | 'help'
    | 'space'

  const kbdKeysMap: Record<KbdKey, string> = {
    command: '⌘',
    shift: '⇧',
    ctrl: '⌃',
    option: '⌥',
    enter: '↵',
    delete: '⌫',
    escape: '⎋',
    tab: '⇥',
    capslock: '⇪',
    up: '↑',
    right: '→',
    down: '↓',
    left: '←',
    pageup: '⇞',
    pagedown: '⇟',
    home: '↖',
    end: '↘',
    help: '?',
    space: '␣'
  }

  const kbdKeysLabelMap: Record<KbdKey, string> = {
    command: 'Command',
    shift: 'Shift',
    ctrl: 'Control',
    option: 'Option',
    enter: 'Enter',
    delete: 'Delete',
    escape: 'Escape',
    tab: 'Tab',
    capslock: 'Caps Lock',
    up: 'Up',
    right: 'Right',
    down: 'Down',
    left: 'Left',
    pageup: 'Page Up',
    pagedown: 'Page Down',
    home: 'Home',
    end: 'End',
    help: 'Help',
    space: 'Space'
  }

  type KbdProps = {
    as?: string
    variant?: 'default' | 'ghost'
    keys?: KbdKey[]
  }

  const props = withDefaults(defineProps<KbdProps>(), {
    as: 'kbd',
    variant: 'default'
  })

  const kbdClass = computed(() =>
    tv({
      base: 'inline-flex select-none items-center gap-1 px-1.5',
      variants: {
        variant: {
          default: 'rounded-md border bg-gray-50/75 shadow-sm',
          ghost: ''
        }
      }
    })(props)
  )
</script>

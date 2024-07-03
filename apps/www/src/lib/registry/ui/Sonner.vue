<template>
  <Sonner
    class="sonner group"
    v-bind="sonnerProps"
    :toast-options="{
      classes: {
        toast: 'sonner group font-brand group-[.sonner]:shadow-lg',
        actionButton:
          'group-[.sonner]:bg-brand-primary group-[.sonner]:text-brand-light',
        cancelButton:
          'group-[.sonner]:bg-brand-danger group-[.sonner]:text-brand-light'
      }
    }"
  />
</template>

<script setup lang="ts">
  import {
    Toaster as Sonner,
    type ToasterProps as SonnerProps
  } from 'vue-sonner'

  const sonnerProps = defineProps<SonnerProps>()
</script>

<template>
  <div class="font-brand">
    <Announcement />
    <header class="border-b border-gray-200">
      <nav
        class="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4"
      >
        <Logo />
      </nav>
    </header>
    <Content />
  </div>
</template>

<script setup lang="ts">
  import { Content } from 'vitepress'
  import Announcement from '../components/Announcement.vue'
  import Logo from '../components/Logo.vue'
</script>

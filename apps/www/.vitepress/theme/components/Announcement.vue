<template>
  <div
    v-show="showAnnouncement"
    class="text-brand-white bg-brand-primary hidden h-11 items-center justify-between px-4 sm:flex"
  >
    <div></div>
    <a
      class="group inline-flex items-center gap-2 text-sm"
      :href="announcementConfig.link"
    >
      {{ announcementConfig.icon }}
      <span class="font-medium">{{ announcementConfig.title }}</span>
      <div class="bg-brand-white mt-[2px] h-[2px] w-[2px] rounded-full"></div>
      <span>{{ announcementConfig.description }}</span>
      <AnimatedChevron />
    </a>
    <button
      class="flex items-center justify-center"
      @click="showAnnouncement = false"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="size-5"
      >
        <path
          d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
  import { announcementConfig } from '../config/site'
  import { ref } from 'vue'
  import AnimatedChevron from '@/lib/registry/ui/AnimatedChevron.vue'

  const showAnnouncement = ref(true)
</script>

<template>
  <div class="not-docs">
    <TabGroup>
      <TabList>
        <Tab>1</Tab>
        <Tab>2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>11</TabPanel>
        <TabPanel>22</TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup lang="ts">
  // TODO: Replace with psyui Tabs component
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>

<template>
  <TabsRoot as="div" class="flex flex-col" defaultValue="vite">
    <TabsList class="flex w-full gap-4">
      <TabsTrigger asChild value="vite">
        <Card
          class="data-[state=active]:border-brand-primary data-[state=active]:bg-brand-primaryLight/10 flex flex-col items-center justify-center gap-2 py-8 outline-none data-[state=active]:border-2"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="fill-brand-primaryDark h-10 w-10"
            fill="currentColor"
          >
            <title>Vite</title>
            <path
              d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z"
            ></path>
          </svg>
          <span class="text-brand-primaryDark font-medium">Vite</span>
        </Card>
      </TabsTrigger>
      <TabsTrigger asChild value="nuxt">
        <Card
          class="data-[state=active]:border-brand-primary data-[state=active]:bg-brand-primaryLight/10 flex flex-col items-center justify-center gap-2 py-8 outline-none data-[state=active]:border-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-brand-primaryDark mt-1 h-12 w-12"
            viewBox="0 0 900 900"
            fill="none"
          >
            <title>Nuxt</title>
            <path
              d="M504.908 750H839.476C850.103 750.001 860.542 747.229 869.745 741.963C878.948 736.696 886.589 729.121 891.9 719.999C897.211 710.876 900.005 700.529 900 689.997C899.995 679.465 897.193 669.12 891.873 660.002L667.187 274.289C661.876 265.169 654.237 257.595 645.036 252.329C635.835 247.064 625.398 244.291 614.773 244.291C604.149 244.291 593.711 247.064 584.511 252.329C575.31 257.595 567.67 265.169 562.36 274.289L504.908 372.979L392.581 179.993C387.266 170.874 379.623 163.301 370.42 158.036C361.216 152.772 350.777 150 340.151 150C329.525 150 319.086 152.772 309.883 158.036C300.679 163.301 293.036 170.874 287.721 179.993L8.12649 660.002C2.80743 669.12 0.00462935 679.465 5.72978e-06 689.997C-0.00461789 700.529 2.78909 710.876 8.10015 719.999C13.4112 729.121 21.0523 736.696 30.255 741.963C39.4576 747.229 49.8973 750.001 60.524 750H270.538C353.748 750 415.112 713.775 457.336 643.101L559.849 467.145L614.757 372.979L779.547 655.834H559.849L504.908 750ZM267.114 655.737L120.551 655.704L340.249 278.586L449.87 467.145L376.474 593.175C348.433 639.03 316.577 655.737 267.114 655.737Z"
              fill="currentColor"
            ></path>
          </svg>
          <span class="text-brand-primaryDark font-medium">Nuxt</span>
        </Card>
      </TabsTrigger>
    </TabsList>
    <TabsContent value="vite">
      <slot name="vite" />
    </TabsContent>
    <TabsContent value="nuxt">
      <slot name="nuxt" />
    </TabsContent>
  </TabsRoot>
</template>

<script setup lang="ts">
  // TODO: Replace with psyui Tabs component
  import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
  import Card from '@/lib/registry/ui/Card.vue'
</script>

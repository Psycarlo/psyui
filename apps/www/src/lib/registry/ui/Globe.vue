<template>
  <div class="absolute inset-0 mx-auto aspect-square w-full">
    <canvas ref="target" class="h-full w-full" />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import createGlobe, { type COBEOptions } from 'cobe'

  type GlobeProps = {
    cobeOptions?: COBEOptions
  }

  const defaultCobeOptions: COBEOptions = {
    width: 300,
    height: 300,
    onRender: () => {},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    markers: [
      { location: [14.5995, 120.9842], size: 0.03 },
      { location: [19.076, 72.8777], size: 0.1 },
      { location: [23.8103, 90.4125], size: 0.05 },
      { location: [30.0444, 31.2357], size: 0.07 },
      { location: [39.9042, 116.4074], size: 0.08 },
      { location: [-23.5505, -46.6333], size: 0.1 },
      { location: [19.4326, -99.1332], size: 0.1 },
      { location: [40.7128, -74.006], size: 0.1 },
      { location: [34.6937, 135.5022], size: 0.05 },
      { location: [41.0082, 28.9784], size: 0.06 }
    ]
  }

  const props = defineProps<GlobeProps>() // ADD default

  const target = ref<HTMLCanvasElement>()

  onMounted(() => {
    if (!target.value) return
    createGlobe(target.value, {
      ...defaultCobeOptions
    })
  })

  // destroy on unmounted
</script>

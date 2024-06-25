<template>
  <div class="relative overflow-hidden">
    <Marquee pause-on-hover reverse class="[--duration:15s] [--gap:1.5rem]">
      <Card v-for="asset in assets" class="w-[300px]">
        <div class="flex cursor-pointer flex-col items-center gap-2">
          <div class="flex items-center gap-3">
            <img :src="asset.img" class="h-12 w-12 rounded-full" />
            <p class="font-medium">{{ asset.ticker }}</p>
            <p class="text-slate-400">{{ asset.name }}</p>
          </div>
          <p class="text-2xl font-bold">${{ asset.price }}</p>
        </div>
      </Card>
    </Marquee>
    <div
      className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"
    ></div>
    <div
      className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"
    ></div>
  </div>
</template>

<script setup lang="ts">
  import Marquee from '../ui/Marquee.vue'
  import Card from '../ui/Card.vue'

  type Asset = {
    ticker: string
    name: string
    img: string
    price: number
  }

  const assets: Asset[] = [
    {
      ticker: 'BTC',
      name: 'Bitcoin',
      img: 'https://avatar.vercel.sh/btc.svg?text=BTC',
      price: 69420.69
    },
    {
      ticker: 'MSTR',
      name: 'MicroStrategy Inc',
      img: 'https://avatar.vercel.sh/mstr.svg?text=MSTR',
      price: 1372.15
    },
    {
      ticker: 'GME',
      name: 'GameStop Corp',
      img: 'https://avatar.vercel.sh/gme.svg?text=GME',
      price: 23.65
    },
    {
      ticker: 'APPL',
      name: 'Apple Inc',
      img: 'https://avatar.vercel.sh/appl.svg?text=APPL',
      price: 208.14
    }
  ]
</script>

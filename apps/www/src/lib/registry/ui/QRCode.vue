<template>
  <div ref="target" />
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import QRCodeStyling, { type Options } from 'qr-code-styling'

  type QRCodeProps = {
    value: string
    size?: number
    color?: string
    margin?: number
    options?: Partial<Options>
  }

  const props = withDefaults(defineProps<QRCodeProps>(), {
    size: 200,
    margin: 0
  })

  const target = ref<HTMLDivElement>()

  onMounted(async () => {
    const qrCode = new QRCodeStyling({
      width: props.size,
      height: props.size,
      margin: props.margin,
      type: 'canvas',
      data: props.value,
      cornersSquareOptions: {
        type: 'extra-rounded',
        color: props.color
      },
      cornersDotOptions: {
        color: props.color
      },
      dotsOptions: {
        type: 'extra-rounded',
        color: props.color
      },
      qrOptions: {
        errorCorrectionLevel: 'H'
      },
      ...props.options
    })

    qrCode.append(target.value)
  })
</script>

<template>
  <div ref="target" />
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import QRCodeStyling, { type Options } from 'qr-code-styling'

  type QRCodeProps = {
    value: string
    size?: number
    options?: Partial<Options>
  }

  const props = withDefaults(defineProps<QRCodeProps>(), {
    size: 200
  })

  const target = ref<HTMLDivElement>()

  onMounted(async () => {
    const qrCode = new QRCodeStyling({
      width: props.size,
      height: props.size,
      type: 'canvas',
      data: props.value,
      cornersSquareOptions: {
        type: 'extra-rounded'
      },
      dotsOptions: {
        type: 'extra-rounded'
      },
      qrOptions: {
        errorCorrectionLevel: 'H'
      },
      ...props.options
    })

    qrCode.append(target.value)
  })
</script>

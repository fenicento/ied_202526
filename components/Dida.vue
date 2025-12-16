<script setup>
import { computed, toRef } from 'vue'
import { useQRCode } from '@vueuse/integrations/useQRCode'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: 'fit-content'
  },
  bgColor: {
    type: String,
    default: 'transparent' 
  },
   color: {
    type: String,
    default: 'black' 
  },
    padding: {
        type: String,
        default: '0.5rem'
    },
    showQr: {
        type: Boolean,
        default: true
    }
})

const linkRef = toRef(props, 'link')
const qrcode = useQRCode(linkRef)
</script>

<template>
  <div class="flex flex-row justify-start gap-2 max-w-xs" :style="{ width: width, backgroundColor: bgColor, padding: padding }">
    <div class="dida-content">
      <p v-if="!link"><b :style="{ color: color }">{{ title }}</b></p>
      <p v-else>
        <a :href="link" target="_blank" :style="{textDecorationColor:color}" class="dida-title-link">
          <b :style="{ color: color }">{{ title }}</b>
          <mdi-open-in-new :style="{ color: color }" class="inline-block ml-1 text-xs" />
        </a>
      </p>
      <p v-if="subtitle" :style="{ color: color }">{{ subtitle }}</p>
    </div>
    <div v-if="link && showQr" class="dida-qr">
      <img :src="qrcode" alt="QR Code" />
    </div>
  </div>
</template>

<style scoped>
.dida-content {
  flex: 1;
  font-size:0.7rem;
}
.dida-content p{
      margin:0;
  line-height:1.1rem;
}
.dida-title-link, .dida-title-link *  {
  text-decoration: none !important;
  color: inherit;
}
.dida-title-link:hover {
  text-decoration: underline;
  text-decoration-color: black !important;
  text-decoration-thickness: 2px !important;
  color: black !important;
}
.dida-qr img {
  width: 60px;
  height: 60px;
}
</style>

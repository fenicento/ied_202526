<script setup lang="ts">
import { computed } from 'vue'
import { YouTube, Vimeo } from '@vueframe/vueframe'

const props = defineProps<{
  video: string
  autoplay?: boolean
  muted?: boolean
}>()

const videoInfo = computed(() => {
  const url = props.video
  
  // YouTube patterns
  const youtubePatterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/ // Just the ID
  ]
  
  for (const pattern of youtubePatterns) {
    const match = url.match(pattern)
    if (match) {
      return { platform: 'youtube', id: match[1] }
    }
  }
  
  // Vimeo patterns
  const vimeoPatterns = [
    /vimeo\.com\/(\d+)/,
    /player\.vimeo\.com\/video\/(\d+)/,
    /^(\d+)$/ // Just the ID (numeric = Vimeo)
  ]
  
  for (const pattern of vimeoPatterns) {
    const match = url.match(pattern)
    if (match) {
      return { platform: 'vimeo', id: match[1] }
    }
  }
  
  return { platform: 'unknown', id: url }
})
</script>

<template>
  <div class="slidev-layout h-full w-full relative">
    <YouTube 
      v-if="videoInfo.platform === 'youtube'"
      :id="videoInfo.id"
      :autoplay="autoplay ?? false"
      :muted="muted ?? false"
      width="100%"
      height="100%"
      class="absolute inset-0"
    />
    <Vimeo 
      v-else-if="videoInfo.platform === 'vimeo'"
      :id="videoInfo.id"
      :autoplay="autoplay ?? false"
      :muted="muted ?? false"
      width="100%"
      height="100%"
      class="absolute inset-0"
    />
    <div v-else class="flex items-center justify-center h-full">
      <p class="text-xl text-red-500">Unknown video platform: {{ video }}</p>
    </div>
    <!-- Slot for overlay content like Dida -->
    <div class="absolute inset-0 z-10 pointer-events-none">
      <div class="pointer-events-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.slidev-layout :deep(iframe) {
  width: 100% !important;
  height: 100% !important;
  position: absolute;
  inset: 0;
}
</style>

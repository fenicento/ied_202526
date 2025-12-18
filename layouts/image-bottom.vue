<script setup lang="ts">
const props = defineProps<{
  image: string
  backgroundSize?: string
}>()
</script>

<template>
  <div class="slidev-layout h-full flex flex-col py-0">
    <div class="flex-1 max-h-1/2 overflow-hidden top-half">
      <slot />
    </div>
    <div class="h-1/2 -mx-16">
      <img :src="image" :class="`w-full h-full object-${props.backgroundSize || 'cover'}`" />
    </div>
  </div>
</template>

<style>
.top-half {
  padding-top:2.5rem;
}
</style>

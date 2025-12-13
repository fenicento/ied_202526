<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { Camera } from '@mediapipe/camera_utils'
import { 
  Holistic,
  POSE_CONNECTIONS,
  POSE_LANDMARKS,
  POSE_LANDMARKS_LEFT,
  POSE_LANDMARKS_RIGHT,
  HAND_CONNECTIONS,
  FACEMESH_TESSELATION,
  FACEMESH_RIGHT_EYE,
  FACEMESH_RIGHT_EYEBROW,
  FACEMESH_LEFT_EYE,
  FACEMESH_LEFT_EYEBROW,
  FACEMESH_FACE_OVAL,
  FACEMESH_LIPS
} from '@mediapipe/holistic'
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils'

const videoElement = ref<HTMLVideoElement | null>(null)
const canvasElement = ref<HTMLCanvasElement | null>(null)
const isLoaded = ref(false)
const isSupported = ref(true)

let holistic: Holistic | null = null
let camera: Camera | null = null
let activeEffect = 'mask'

function removeElements(landmarks: any[], elements: number[]) {
  for (const element of elements) {
    delete landmarks[element]
  }
}

function removeLandmarks(results: any) {
  if (results.poseLandmarks) {
    removeElements(
      results.poseLandmarks,
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22]
    )
  }
}

function connect(
  ctx: CanvasRenderingContext2D,
  connectors: Array<[any, any]>
): void {
  const canvas = ctx.canvas
  for (const connector of connectors) {
    const from = connector[0]
    const to = connector[1]
    if (from && to) {
      if (from.visibility && to.visibility &&
          (from.visibility < 0.1 || to.visibility < 0.1)) {
        continue
      }
      ctx.beginPath()
      ctx.moveTo(from.x * canvas.width, from.y * canvas.height)
      ctx.lineTo(to.x * canvas.width, to.y * canvas.height)
      ctx.stroke()
    }
  }
}

function onResults(results: any): void {
  if (!canvasElement.value) return
  
  const canvasCtx = canvasElement.value.getContext('2d')
  if (!canvasCtx) return

  isLoaded.value = true
  removeLandmarks(results)

  canvasCtx.save()
  canvasCtx.clearRect(0, 0, canvasElement.value.width, canvasElement.value.height)

  if (results.segmentationMask) {
    canvasCtx.drawImage(
      results.segmentationMask, 0, 0, canvasElement.value.width,
      canvasElement.value.height
    )

    if (activeEffect === 'mask' || activeEffect === 'both') {
      canvasCtx.globalCompositeOperation = 'source-in'
      canvasCtx.fillStyle = '#00FF007F'
      canvasCtx.fillRect(0, 0, canvasElement.value.width, canvasElement.value.height)
    } else {
      canvasCtx.globalCompositeOperation = 'source-out'
      canvasCtx.fillStyle = '#0000FF7F'
      canvasCtx.fillRect(0, 0, canvasElement.value.width, canvasElement.value.height)
    }

    canvasCtx.globalCompositeOperation = 'destination-atop'
    canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.value.width, canvasElement.value.height
    )

    canvasCtx.globalCompositeOperation = 'source-over'
  } else {
    canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.value.width, canvasElement.value.height
    )
  }

  // Connect elbows to hands
  canvasCtx.lineWidth = 5
  if (results.poseLandmarks) {
    if (results.rightHandLandmarks) {
      canvasCtx.strokeStyle = 'white'
      connect(canvasCtx, [[
        results.poseLandmarks[POSE_LANDMARKS.RIGHT_ELBOW],
        results.rightHandLandmarks[0]
      ]])
    }
    if (results.leftHandLandmarks) {
      canvasCtx.strokeStyle = 'white'
      connect(canvasCtx, [[
        results.poseLandmarks[POSE_LANDMARKS.LEFT_ELBOW],
        results.leftHandLandmarks[0]
      ]])
    }
  }

  // Pose
  drawConnectors(
    canvasCtx, results.poseLandmarks, POSE_CONNECTIONS,
    { color: 'white' }
  )
  
  if (results.poseLandmarks) {
    const leftIndices = Object.values(POSE_LANDMARKS_LEFT)
    const rightIndices = Object.values(POSE_LANDMARKS_RIGHT)
    
    drawLandmarks(
      canvasCtx,
      leftIndices.map((index: number) => results.poseLandmarks[index]),
      { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(255,138,0)' }
    )
    drawLandmarks(
      canvasCtx,
      rightIndices.map((index: number) => results.poseLandmarks[index]),
      { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(0,217,231)' }
    )
  }

  // Hands
  drawConnectors(
    canvasCtx, results.rightHandLandmarks, HAND_CONNECTIONS,
    { color: 'white' }
  )
  drawLandmarks(canvasCtx, results.rightHandLandmarks, {
    color: 'white',
    fillColor: 'rgb(0,217,231)',
    lineWidth: 2,
    radius: 4
  })
  drawConnectors(
    canvasCtx, results.leftHandLandmarks, HAND_CONNECTIONS,
    { color: 'white' }
  )
  drawLandmarks(canvasCtx, results.leftHandLandmarks, {
    color: 'white',
    fillColor: 'rgb(255,138,0)',
    lineWidth: 2,
    radius: 4
  })

  // Face
  drawConnectors(
    canvasCtx, results.faceLandmarks, FACEMESH_TESSELATION,
    { color: '#C0C0C070', lineWidth: 1 }
  )
  drawConnectors(
    canvasCtx, results.faceLandmarks, FACEMESH_RIGHT_EYE,
    { color: 'rgb(0,217,231)' }
  )
  drawConnectors(
    canvasCtx, results.faceLandmarks, FACEMESH_RIGHT_EYEBROW,
    { color: 'rgb(0,217,231)' }
  )
  drawConnectors(
    canvasCtx, results.faceLandmarks, FACEMESH_LEFT_EYE,
    { color: 'rgb(255,138,0)' }
  )
  drawConnectors(
    canvasCtx, results.faceLandmarks, FACEMESH_LEFT_EYEBROW,
    { color: 'rgb(255,138,0)' }
  )
  drawConnectors(
    canvasCtx, results.faceLandmarks, FACEMESH_FACE_OVAL,
    { color: '#E0E0E0', lineWidth: 5 }
  )
  drawConnectors(
    canvasCtx, results.faceLandmarks, FACEMESH_LIPS,
    { color: '#E0E0E0', lineWidth: 5 }
  )

  canvasCtx.restore()
}

async function initHolistic() {
  if (!videoElement.value || !canvasElement.value) return

  holistic = new Holistic({
    locateFile: (file: string) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.5/${file}`
    }
  })

  holistic.setOptions({
    selfieMode: true,
    modelComplexity: 1,
    smoothLandmarks: true,
    enableSegmentation: false,
    smoothSegmentation: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  })

  holistic.onResults(onResults)

  camera = new Camera(videoElement.value, {
    onFrame: async () => {
      if (videoElement.value && holistic) {
        await holistic.send({ image: videoElement.value })
      }
    },
    width: 1280,
    height: 720
  })

  camera.start()
}

onMounted(() => {
  initHolistic()
})

onUnmounted(() => {
  if (camera) {
    camera.stop()
  }
  if (holistic) {
    holistic.close()
  }
})
</script>

<template>
  <div class="holistic-container">
    <video ref="videoElement" class="input-video" playsinline></video>
    <canvas ref="canvasElement" class="output-canvas" width="1280" height="720"></canvas>
    
    <div v-if="!isLoaded" class="loading-overlay">
      <div class="spinner"></div>
      <div class="loading-text">Caricamento MediaPipe Holistic...</div>
    </div>

    <div v-if="!isSupported" class="warning-overlay">
      <p>Questo browser potrebbe non essere completamente supportato</p>
    </div>


  </div>
</template>

<style scoped>
.holistic-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a2e;
  overflow: hidden;
}

.input-video {
  display: none;
}

.output-canvas {
  max-width: 100%;
  max-height: 100%;
  transform: scaleX(-1);
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(26, 26, 46, 0.9);
  z-index: 10;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: #e4ca00;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  margin-top: 20px;
  color: white;
  font-size: 1.2rem;
}

.warning-overlay {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 138, 0, 0.9);
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
  z-index: 5;
}

.info-badge {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 8px 16px;
  border-radius: 20px;
  color: white;
  font-size: 0.9rem;
}
</style>

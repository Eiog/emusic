<!-- eslint-disable unused-imports/no-unused-vars -->
<!-- eslint-disable no-console -->
<script setup lang='ts'>
const { pause, play } = useAudioStore()
const { isPlaying, mediaStartTime, contextTime, playingTime, mediaDuration, playPercentage } = storeToRefs(useAudioStore())
defineOptions({
  name: 'IndexPage',
})
useHead({
  title: '首页',
})

onMounted(() => {

})

async function selectFile() {
  const result = await window.$api.openNewWindow()
  console.log(result)
}
function onChange() {
}
function send() {

}
</script>

<template>
  <div class="flex-col gap-10">
    <button class="btn" @click="selectFile">
      选择
    </button>
    <input id="" type="file" name="file" @change="onChange">
    isPlaying{{ isPlaying }}
    <div class="flex gap-10">
      <button class="btn" @click="() => pause()">
        pause
      </button>
      <button class="btn" @click="() => play()">
        play
      </button>
    </div>
    <div>
      contextTime {{ contextTime }}
      startTime {{ mediaStartTime }}
      playingTime {{ playingTime }}
      mediaDuration {{ mediaDuration }}
      playPercentage {{ playPercentage }}
    </div>
    <div>
      <n-progress :percentage="playPercentage" type="circle" />
    </div>
    <div>
      <button class="btn" @click="send">
        send
      </button>
    </div>
  </div>
</template>

<style scoped lang='less'>

</style>

<route lang="yaml">
name: index-page
meta:
  layout: default
  title: Hello World !
</route>

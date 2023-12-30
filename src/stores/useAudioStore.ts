import { defineStore } from 'pinia'

interface PlayList {

}
export const useAudioStore = defineStore(
  'audioStore',
  () => {
    const { audioContext, source, gainNode, analyser, dataArray, onEnd, onStateChange, onRunningStep } = useAudioContext()
    const volume = ref(100)
    watch(volume, (v) => {
      gainNode.gain.value = v / 100
    }, { immediate: true })
    const loopType = ref<0 | 1 | 2>(0) // 0 单曲循环 1 列表循环 2随机播放
    const isPlaying = ref(false)
    const isPause = ref(false)
    const isEnd = ref(false)
    watch(isPlaying, (v) => {
      if (v) {
        isPause.value = false
        isEnd.value = false
      }
    })
    watch(isPause, (v) => {
      if (v) {
        isPlaying.value = false
        isEnd.value = false
      }
    })
    watch(isEnd, (v) => {
      if (v) {
        isPlaying.value = false
        isPause.value = false
      }
    })
    const isMute = ref(false)
    const contextTime = ref(0)
    const mediaStartTime = ref(0)
    const mediaPauseTime = ref(0)
    const mediaDuration = ref(0)
    const mediaLoaded = ref(false)
    const playList = ref<PlayList[]>()

    const playingTime = computed(() => mediaLoaded.value ? (contextTime.value - mediaStartTime.value) > mediaDuration.value ? mediaDuration.value : (contextTime.value - mediaStartTime.value) : 0)
    const playPercentage = computed(() => mediaDuration.value === 0 ? 0 : parseFloat(((playingTime.value / mediaDuration.value) * 100).toFixed(2)))

    function playByBuffer(buffer: ArrayBuffer) {
      audioContext.decodeAudioData(buffer, (buffer) => {
        source.buffer = buffer
        mediaDuration.value = parseFloat(buffer.duration.toFixed(2))
        source.loop = false
        mediaStartTime.value = contextTime.value
        source.start(0, mediaStartTime.value)
        mediaLoaded.value = true
      })
    }
    function playByUrl(url: string) {

    }
    function play() {
      if (!isPlaying.value) {
        audioContext.resume().then(() => {
          isPlaying.value = true
        })
      }
    }
    function pause() {
      if (!isPause.value) {
        audioContext.suspend().then(() => {
          isPause.value = true
        })
      }
    }
    function jump(time: number) {
      source.start(0, time)
    }
    function rePlay() {
      source.start(0)
    }
    function randomPlay() {

    }

    function prev() {

    }
    function next() {

    }
    function mute() {
      gainNode.gain.value = 0
      isMute.value = true
    }
    function unMute() {
      gainNode.gain.value = 1
      isMute.value = false
    }
    onEnd(() => {
      isEnd.value = true
      switch (loopType.value) {
        case 0: rePlay()
          break
        case 1: next()
          break
        case 2:randomPlay()
          break
      }
    })
    onStateChange((state) => {
      switch (state) {
        case 'suspended':
          break
        case 'running':
          break
        case 'closed':
          break
      }
    })
    onRunningStep((time) => {
      contextTime.value = time
    })
    return {
      audioContext,
      source,
      gainNode,
      analyser,
      dataArray,
      playByBuffer,
      isPlaying,
      isPause,
      play,
      pause,
      playingTime,
      contextTime,
      mediaStartTime,
      mediaDuration,
      playPercentage,
      mediaPauseTime,
      playList,
      playByUrl,
      jump,
      rePlay,
      randomPlay,
      prev,
      next,
      mute,
      unMute,
    }
  },
  {
    persist: {
      key: '__AudioStore__',
      paths: [''],
    },
  },
)

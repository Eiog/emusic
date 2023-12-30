export function useAudioContext() {
  const audioContext = new AudioContext()
  const source = audioContext.createBufferSource()
  const gainNode = audioContext.createGain()
  const analyser = audioContext.createAnalyser()
  const dataArray = new Uint8Array(analyser.frequencyBinCount)
  analyser.getByteTimeDomainData(dataArray)
  source.connect(analyser)
  analyser.connect(gainNode)
  gainNode.connect(audioContext.destination)

  let _onStateChange: ((state: typeof audioContext.state) => void) | undefined
  audioContext.addEventListener('statechange', () => {
    _onStateChange && Object.prototype.toString.call(_onStateChange) === '[object Function]' && _onStateChange(audioContext.state)
  })

  let _onEnd: (() => void) | undefined
  source.addEventListener('ended', () => {
    _onEnd && Object.prototype.toString.call(_onEnd) === '[object Function]' && _onEnd()
  })

  let _onRunning: ((currentTime: number) => void) | undefined
  let _onRunningStep: (time: number) => void | undefined

  function _requestAnimationFrame() {
    window.requestAnimationFrame(() => {
      _onRunning && Object.prototype.toString.call(_onRunning) === '[object Function]' && _onRunning(audioContext.currentTime)
      _onRunningStep && Object.prototype.toString.call(_onRunningStep) === '[object Function]' && Number.isInteger(audioContext.currentTime) && _onRunningStep(audioContext.currentTime)
      _requestAnimationFrame()
    })
  }

  onMounted(() => {
    _requestAnimationFrame()
  })
  onUnmounted(() => {
    audioContext.close()
  })
  return {
    audioContext,
    source,
    gainNode,
    analyser,
    dataArray,
    onStateChange: (cb?: (state: typeof audioContext.state) => void) => {
      if (cb && Object.prototype.toString.call(cb) === '[object Function]')
        _onStateChange = cb
    },
    onEnd: (cb?: () => void) => {
      if (cb && Object.prototype.toString.call(cb) === '[object Function]')
        _onEnd = cb
    },
    onRunning: (cb?: (currentTime: number) => void) => {
      if (cb && Object.prototype.toString.call(cb) === '[object Function]')
        _onRunning = cb
    },
    onRunningStep: (cb?: (time: number) => void) => {
      if (cb && Object.prototype.toString.call(cb) === '[object Function]')
        _onRunningStep = cb
    },
  }
}

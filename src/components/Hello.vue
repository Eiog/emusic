<script setup lang="ts">
defineOptions({
  name: 'HelloWorld',
})
const { t } = useI18n()
const urls = [
  {
    title: 'Vite2',
    url: 'https://vitejs.cn/',
  },
  {
    title: 'Vue3',
    url: 'https://vuejs.org/',
  },
  {
    title: 'Naive-UI',
    url: 'https://www.naiveui.com/',
  },
  {
    title: 'Vue Router4',
    url: 'https://router.vuejs.org/',
  },
  {
    title: 'Pinia',
    url: 'https://pinia.vuejs.org/',
  },
  {
    title: 'Unocss',
    url: 'https://uno.antfu.me/',
  },
  {
    title: 'Axios',
    url: 'https://axios-http.com/',
  },
  {
    title: 'Mockjs',
    url: 'http://mockjs.com/',
  },
  {
    title: 'Nprogress',
    url: 'https://github.com/rstacruz/nprogress',
  },
  {
    title: 'VueUse',
    url: 'https://vueuse.org/',
  },
]
const count = ref(0)
const show = ref(false)
onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 2000)
})
</script>

<template>
  <div flex="~ col" flex-center>
    <div relative>
      <div
        absolute
        top0
        right0
        bg="purple-5"
        text="white xl"
        select-none
        shadow-md
        rounded-full
        px3
      >
        {{ count }}
      </div>
      <n-popover :show="show" placement="left">
        <template #trigger>
          <i
            i-twemoji-hatching-chick
            text="9xl"
            cursor-pointer
            outline-transparent
            animated="~ bounce infinite"
            @click="
              () => {
                count++;
                show = false;
              }
            "
          />
        </template>
        <span> 点我试试 </span>
      </n-popover>
    </div>
    <div><SvgIcon name="home" /></div>
    <div text="center">
      <h1 text="3xl dark:gray-4">
        {{ t('welcome') }}
      </h1>
      <h1 text="3xl dark:gray-4">
        {{ t('hello') }}
      </h1>
    </div>
    <n-button type="primary">
      Primary
    </n-button>
    <div flex-center flex="wrap" gap3>
      <a
        v-for="(item, index) in urls"
        :key="index"
        transition-colors
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        class=""
      >{{ item.title }}</a>
    </div>
    <div class="postcss-test">
      PostCSS Test
    </div>
  </div>
</template>

<style scoped lang="less">
a {
  @apply text-purple-5 no-underline hover:text-purple-3;
}
.postcss-test {
  height: 30px;
  background: blueviolet;
  user-select: none;
}
</style>

<script setup lang="ts">
</script>

<template>
  <header class="w-full h-16 flex-center">
    <nav class="w-screen-lg flex-y-center justify-end gap-3 <lg:(w-full p-x-10)">
      <BackToHome class="m-r-auto" />
      <ToggleDarkMode />
      <ToggleLanguage />
    </nav>
  </header>
  <main class="flex-1 w-screen-lg flex-col <lg:(w-full p-x-10)">
    <RouterView />
  </main>
</template>

<style scoped lang="less"></style>

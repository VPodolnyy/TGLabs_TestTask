<script setup>
  import Block1 from './components/Block1.vue'
  import Block2 from './components/Block2.vue'
  import Block3 from './components/Block3.vue'
</script>

<template>
  <div class="app">
    <div class="app__row">
      <Block1  />
      <Block2  />
    </div>
    <Block3  />
  </div>
</template>

<style scoped lang="stylus">
  .app
    display flex
    flex-direction column
    align-items center
    height 100%
    padding 32px
    gap 24px
    .app__row
      display flex
      gap 24px
</style>

<script setup>
const numBlocks = 25
</script>

<template>
  <div class="block2">
    <div class="block" v-for="i in 25" key="i">
      <div class="counter">{{ i }}</div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .block2
    grid-template-columns repeat(5, 104px)
    grid-template-rows repeat(5, 100px)
    display grid
    border 1px solid #4D4D4D
    border-radius 12px
    overflow hidden
    background #4D4D4D
    grid-gap 1px
    .block
      display flex
      background-color #262626
      position relative
      .counter
        color #ffffff
        position absolute
        right 0
        bottom -1px
        padding 2px 4px
        border 1px solid #4D4D4D
        border-radius 6px 0 0 0
        font-weight 500
        line-height 12px
        font-size 10px
</style>

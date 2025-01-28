<script setup>
import Skeleton from './Skeleton.vue'
</script>

<template>
  <div class="block3">
    <Skeleton height="3" width="70"/>
    <div class="close">
      <svg width="20" height="20" viewBox="0 0 25 25" stroke-width="3" fill="none">
        <path d="M18.8852 6.19873L6.88523 18.1987" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.88523 6.19873L18.8852 18.1987" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>
  </div>
</template>

<style scoped lang="stylus">
$resizer-animation = transform .5s cubic-bezier(.92,-0.68,.15,1.56)
  .block3
    display flex
    position relative
    padding 18px 68px 18px 18px
    background-color #262626
    border 1px solid #4D4D4D
    border-radius 12px
    .close
      position absolute
      right 0px
      top 0px
      display flex
      width 35px
      height 35px
      cursor pointer
      z-index 3
      svg
        margin auto
        stroke $white
        path
          transition $resizer-animation
          transform-origin center
      &:hover,
      &:active
        svg
          path:first-child
            transform rotate(45deg)
          path:last-child
            transform rotate(-45deg)
</style>

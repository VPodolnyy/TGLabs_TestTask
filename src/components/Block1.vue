<script setup>
import Skeleton from './Skeleton.vue'
</script>

<template>
  <div class="block1">
    <img class="previewImg" src='../assets/images/img.png' alt="PreviewImg">
    <div class="skeletons">
      <Skeleton height="2" width="19"/>
      <Skeleton height="1" width="15" />
      <Skeleton height="1" width="19" />
      <Skeleton height="1" width="17" />
      <Skeleton height="1" width="16" />
      <Skeleton height="1" width="14" />
      <Skeleton height="1" width="18" />
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .block1
    display flex
    flex 1
    flex-direction column
    padding 18px 14px 24px
    gap 20px
    max-width 236px
    background-color #262626
    border 1px solid #4D4D4D
    border-radius 12px
    .previewImg
      max-width 100%
    .skeletons
      display flex
      flex-direction column
      align-items center
      .skeleton
        margin-bottom 16px
        &:first-child
          margin-bottom 24px
        &:last-child
          margin-bottom 0
          margin-top 8px
</style>

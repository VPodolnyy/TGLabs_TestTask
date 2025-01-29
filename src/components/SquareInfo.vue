<script setup>
import { ref, defineEmits } from 'vue'
import Skeleton from './Skeleton.vue'

const props = defineProps({
  square: Object,
})
const emit = defineEmits({
  delete: Number
})

const openInfo = ref(true)
const flagDeleteOverlay = ref(false)
const inputValue = ref(null)
// function toggleSquareInfo () {
//   // openInfo.value = !openInfo.value
//   $emit('close')
// }
function toggleDeleteOverlay () {
  flagDeleteOverlay.value = !flagDeleteOverlay.value
}
function validateBeforeDelete (e) {
  e.preventDefault()
  inputValue.value = Number(e.target.value)
}
function acceptDelete () {
  emit('delete', inputValue)
}
</script>

<template>
  <div class="squareInfo" :class="{'openInfo': openInfo}">
    <div class="squareInfo_wrapper">
      <div class="close" @click="$emit('close')">
        <svg width="20" height="20" viewBox="0 0 25 25" stroke-width="3" fill="none">
          <path d="M18.8852 6.19873L6.88523 18.1987" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.88523 6.19873L18.8852 18.1987" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="content" v-html="square.content"/>
      <div class="divider top" />
      <div class="skeletons">
        <Skeleton height="2" width="21"/>
        <Skeleton height="1" width="21"/>
        <Skeleton height="1" width="21"/>
        <Skeleton height="1" width="21"/>
        <Skeleton height="1" width="18"/>
        <Skeleton height="1" width="8" />
      </div>
      <div class="divider bottom" />
      <button class="deleteButton" @click="toggleDeleteOverlay">Удалить предмет</button>
      <div class="overlay_delete" :class="{ 'open': flagDeleteOverlay }">
        <input type="number" class="quantity" v-model="inputValue" @input="validateBeforeDelete" placeholder="Введите количество" />
        <div class="buttonGroup">
          <button class="cancel" @click="toggleDeleteOverlay">Отмена</button>
          <button class="accept" @click="acceptDelete">Подтвердить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .squareInfo
    position absolute
    right 0
    top 0
    background rgba(38, 38, 38, 0.5)
    width 50%
    height 100%
    transform translateX(100%)
    transition transform .1s ease-in-out
    border 1px solid #4D4D4D
    backdrop-filter blur(10px)
    &.openInfo
      transform translateX(0%)
    .squareInfo_wrapper
      position relative
      width 100%
      height 100%
      display flex
      flex-direction column
      padding 20px 15px
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
      .content
        display flex
        justify-content center
        padding 30px 0
        :deep(svg)
          width 130px
          height 130px
      .divider
        height 1px
        background-color #4D4D4D
      .skeletons
        display flex
        flex-direction column
        align-items center
        margin 24px 0
        .skeleton
          margin-bottom 16px
          &:first-child
            margin-bottom 24px
          &:last-child
            margin-bottom 0
            margin-top 8px
      .deleteButton
        background-color #FF8888
        font-weight 400
        font-size 14px
        line-height 16px
        color #ffffff
        border none
        border-radius 8px
        height 39px
        cursor pointer
      .overlay_delete
        display flex
        flex-direction column
        align-items center
        position absolute
        width 100%
        bottom -50%
        right 0
        padding 20px 21px
        transition bottom .2s ease-in-out
        gap 20px
        border 1px solid #4D4D4D
        background-color rgba(38, 38, 38, 0.6)
        backdrop-filter blur(10px)
        &.open
          bottom 0%
        .quantity
          height 40px
          border 1px solid #4D4D4D
          border-radius 4px
          background-color #262626
          width 100%
          color #ffffff
          padding 11px 12px 12px
        .buttonGroup
          display flex
          gap 10px
          width 100%
          button
            padding 8px 15px
            border-radius 8px
            border none
            cursor pointer
            &.cancel
              background-color #fff
              color #2D2D2D
              flex 0
            &.accept
              background-color #FA7272
              color #fff
              flex 1
</style>

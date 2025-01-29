<template>
  <div class="skeleton" :class="color" :style="style"/>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'white',
      validator (value) {
        // Значение должно соответствовать одной из этих строк
        return ['grey', 'white'].includes(value)
      }
    },
    height: {
      type: String,
      default: '8',
      // validator (value) {
      //   // Значение должно соответствовать одной из этих строк
      //   return ['2', '3', '4', '5', '6', '7', '8'].includes(value)
      // }
    },
    width: {
      type: String,
      default: '',
      // validator (value) {
      //   // Значение должно соответствовать одной из этих строк
      //   return ['', '1', '2', '3', '4', '5', '6', '7', '8'].includes(value)
      // }
    },
    grow: {
      type: String,
      default: '1',
      // validator (value) {
      //   // Значение должно соответствовать одной из этих строк
      //   return ['1', '2', '3', '4', '5', '6', '7', '8'].includes(value)
      // } 
    }
  },
  computed: {
    style () {
      const flexGrow = this.width ? '0' : this.grow
      const width = this.width ? this.width + '0px' : ''
      return {
        height: this.height + '0px',
        flexGrow,
        width
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.skeleton
  position relative
  display flex
  flex-shrink 0
  flex-grow 1
  overflow hidden
  border-radius 10px
  &.grey
    background-color $grey-light
  &.white
    // background-color $white
    background linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%)
  &:after
    content ''
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    opacity .7
    transform translateX(-100%)
    // background-image linear-gradient( 90deg, rgba(255, 255, 255, 0), rgba(193, 193, 193, .1), rgba(37, 22, 22, 0))
    background-color grey
    // background-image linear-gradient(
    //   90deg,
    //   $white,
    //   $grey-light,
    //   $white
    // )
    // animation shimmer 1.5s infinite
  @keyframes shimmer
    100%
      transform translateX(100%)
</style>

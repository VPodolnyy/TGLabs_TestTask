<script setup>
import { ref } from 'vue'
import SquareInfo from './SquareInfo.vue'

const quantityBlocks = 25
const flagSquareInfo = ref(false)
const activeSquare = ref(null)
const squares = ref([
  {
    place: 1,
    quantity: 4,
    content: '<svg width="54" height="54" viewBox="0 0 54 54"><rect y="6" width="48" height="48" fill="#7FAA65"/><rect x="6" width="48" height="48" fill="#B8D998" fill-opacity="0.35"/></svg>'
  },
  {
    place: 2,
    quantity: 2,
    content: '<svg width="54" height="54" viewBox="0 0 54 54"><rect y="6" width="48" height="48" fill="#AA9765"/><rect x="6" width="48" height="48" fill="#D9BB98" fill-opacity="0.35"/></svg>'
  },
  {
    place: 3,
    quantity: 5,
    content: '<svg width="54" height="54" viewBox="0 0 54 54"><rect y="6" width="48" height="48" fill="#656CAA"/><rect x="6" width="48" height="48" fill="#7481ED" fill-opacity="0.35"/></svg>'
  }
])

function content (index) {
  const square = squares.value.find(square => square.place === index)
  return square || null
}

function toggleSquareInfo () {
  flagSquareInfo.value = !flagSquareInfo.value
}

function setActiveSquare (i) {
  activeSquare.value = content(i)
  if (!flagSquareInfo.value) {
    toggleSquareInfo()
  }
}

function setDragStart (target, square) {
  const squareCopy = target.cloneNode(true)
  squareCopy.setAttribute('index', square.place)
  squareCopy.style.position = 'fixed'
  squareCopy.style.zIndex = 1000
  document.body.appendChild(squareCopy)
  document.onmousemove = e => moveAt(e, squareCopy)
  document.onmouseup = e => moveStop(e.target, squareCopy)
}

function moveAt(e, square) {
  const {pageX, pageY} = e
  square.style.left = (pageX + 40) - square.offsetWidth / 2 + 'px'
  square.style.top = (pageY + 40) - square.offsetHeight / 2 + 'px'
}

function moveStop(сell, squareCopy) {
  const indexCell = Number(сell.getAttribute('index'))
  const indexSquare = Number(squareCopy.getAttribute('index'))

  // Если место не занято
  if (!content(indexCell) && indexCell !== 0) {
    squares.value = squares.value.map(el => {
    if (el.place === indexSquare) { el.place = indexCell }
    return el
    })
  }
  document.body.removeChild(squareCopy)
  document.onmousemove = null
  document.onmouseup = null
}

function deleteSquare (number) {
  squares.value = squares.value.map(el => {
    if (el.place === activeSquare.value.place) {
      el.quantity = el.quantity - number.value
    }
    return el
  })
}

</script>
<template>
  <div class="block2">
    <div class="block" v-for="i in quantityBlocks" :key="i" :index="i">
      <template v-if="content(i)">
        <div class="content" v-html="content(i).content" @click="setActiveSquare(i)" @mousedown="setDragStart($event.target, content(i))" @dragstart.prevent/>
        <div class="counter">{{ content(i).quantity }}</div>
      </template>
    </div>
    <SquareInfo v-if="flagSquareInfo" :square="activeSquare" @close="toggleSquareInfo" @delete="deleteSquare"/>
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
    position relative
    grid-gap 1px
    .block
      display flex
      background-color #262626
      position relative
      .content
        display flex
        width 100%
        justify-content center
        align-items center  
        &:hover
          background-color #2F2F2F
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
        user-select none
</style>
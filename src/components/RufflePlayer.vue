<template>
    <div class="table-cell" id="swf_container"></div>
</template>

<script setup>
/* eslint-disable */
import '@ruffle-rs/ruffle'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  swfPath: String
})
const swfPath = props.swfPath

/* eslint-disable */

window.RufflePlayer = window.RufflePlayer || {}
window.addEventListener("load", (event) => {
  const ruffle = window.RufflePlayer.newest()
  const player = ruffle.createPlayer()
  player.style.width = '67vw'
  player.style.height = '50.25vw'
  const container = document.getElementById("swf_container")
  container.appendChild(player)
  player.load(swfPath)
})

setTimeout(() => {
  if (location.href.indexOf('reloaded')==-1) {
    location.replace(location.href+'&reloaded=1')
    router.go()
  }
}, 500);
</script>

<style>

</style>

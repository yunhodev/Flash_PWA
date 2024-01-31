<template>
    <div class="text-center" id="swf_container"></div>
</template>

<script setup>
/* eslint-disable */
import '@ruffle-rs/ruffle'
import { onMounted, defineProps } from 'vue'

const props = defineProps({
  swfPath: String
})
const swfPath = props.swfPath

/* eslint-disable */

window.RufflePlayer = window.RufflePlayer || {}
window.addEventListener("load", (event) => {
  const ruffle = window.RufflePlayer.newest()
  const player = ruffle.createPlayer()
  player.style.width = '70vw'
  player.style.height = '52.5vw'
  const container = document.getElementById("swf_container")
  container.appendChild(player)
  player.load(swfPath)
})


/*
// RufflePlayer 객체를 가져옵니다.
const ruffle = window.RufflePlayer.newest()

// 플래시 콘텐츠를 표시할 div 요소의 참조를 생성합니다.
const flashDiv = document.getElementById('swf_container')
*/
// }
/*
setTimeout(function () {
// 컴포넌트가 마운트될 때 플래시 콘텐츠를 로드합니다.
onMounted(() => {
  // 플래시 콘텐츠의 URL을 지정합니다.
  const flashUrl = swfPath

  // 플래시 콘텐츠를 로드하고 div 요소에 삽입합니다.
  ruffle.load(flashUrl).then(player => {
    flashDiv.value.appendChild(player)
  })
})
}
}, 3000)
*/
</script>

<!--
<script src="@/assets/js/ruffle/ruffle.js">

export default {
props: ['swfPath'],
setup(props) {
alert(props.swfPath)
alert('hi')
/*
window.onload = function () {
  window.RufflePlayer = window.RufflePlayer || {};
  window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("swf_container");
    container.appendChild(player);
    player.load(swfPath);
  });
} */
}
}
</script>
-->

<style>

</style>

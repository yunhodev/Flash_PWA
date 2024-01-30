<template>
    <div id="swf_container">
    </div>
</template>

<script setup>
/* eslint-disable */
import { onMounted, defineProps } from 'vue'

const props = defineProps({
  swfPath: String
})
alert(props.swfPath)
const swfPath = props.swfPath

// RufflePlayer 객체를 가져옵니다.
const ruffle = window.RufflePlayer.newest()

// 플래시 콘텐츠를 표시할 div 요소의 참조를 생성합니다.
const flashDiv = document.getElementById('swf_container')
/* eslint-disable */
// window.onload = function () {
  window.RufflePlayer = window.RufflePlayer || {}
  window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest()
    const player = ruffle.createPlayer()
    const container = document.getElementById("swf_container")
    player.width = 75%
    container.appendChild(player)
    player.load(swfPath)
  })
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

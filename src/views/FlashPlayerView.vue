<template>
    <div class="about">
      <h1>This is an flash player page.<br>(developing...)</h1>
    </div>
    <router-link />
</template>

<script setup>
/* eslint-disable */
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import '@/assets/js/ruffle/ruffle'
window.onload = function ()
{
const route = useRoute()
const swfPath = ref('@/assets/swf/')
swfPath.value += route.query.swf
swfPath.value += '.swf'
alert(swfPath)
}
/* const props = defineProps({
  swf: String
})
var flashName = props.swf */
// alert(flashName)
/* import { $router } from 'vue'
const flashName = $router.params.swf_name
alert(flashName)
console.log(flashName)
document.body.append(flashName) */
// document.body.append(this.$route.query.q)
</script>

<style>

</style>

<template>
    <div class="about">
      <h1>This is an flash player page.<br>(developing...)</h1>
      <h2 style="display:none;" id="query">{{ $route.query.swf }}</h2>
    </div>
    <router-link />
</template>

<script setup>
/* eslint-disable */
window.onload = function () {
  // eslint-disable-next-line
  /* eslint-disable */
  var query = document.getElementById('query').innerText
  window.alert(query)
  // document.body.append(this.$route.query.swf)
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

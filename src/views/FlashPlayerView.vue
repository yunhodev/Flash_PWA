<template>
  <div class="container card py-5 mb-4 my-3">
    <div class="col-lg-12">
      <!-- swf content-->
      <article>
        <!-- swf header-->
        <header class="mb-4">
          <!-- Swf title-->
          <h1 class="fw-bolder mb-1">{{ swfName }}</h1>
          <!-- Swf meta content-->
          <div class="text-muted fst-italic mb-2">Uploaded on January, 2024</div>
        </header>
        <!-- swf -->
        <div class="my-1"><RufflePlayer :swfPath="swfPath" /></div>
      </article>
    </div>
  </div>
  <router-link />
</template>

<script setup>
/* eslint-disable */
import RufflePlayer from '@/components/RufflePlayer.vue'
import { ref, computed, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import '@/assets/js/ruffle/ruffle.js'
const route = useRoute()
const router = useRouter()
const swf = route.query.swf
const swfPath = '@/assets/swf/' + swf + '.swf'
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
const swfName = ref(capitalize(swf))
// alert(swfPath)
/*
const swfPath = ref('@/assets/swf/')
swfPath.value += route.query.swf
swfPath.value += '.swf'
alert(swfPath)
*/
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

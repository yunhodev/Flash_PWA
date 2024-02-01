<template>
  <div class="card py-5 my-3 mx-3">
    <div class="col-lg-12">
      <!-- swf content-->
      <article>
        <!-- swf header-->
        <header class="">
          <!-- Swf title-->
          <h1 class="fw-bolder mb-1">{{ swfName }}</h1>
          <!-- Swf meta content-->
          <div class="text-muted fst-italic mb-2">Uploaded on January, 2024</div>
        </header>
        <!-- swf -->
        <div><RufflePlayer class="table-cell mx-3" :swfPath="swfPath" /></div>
        <p v-if="isNotReloaded">Please <a :href="currentLocation" @click="$router.go()"><i>click here</i></a> to reload page if Flash player doesn't loaded</p>
      </article>
    </div>
  </div>
  <router-link />
</template>

<script setup>
/* eslint-disable */
import RufflePlayer from '@/components/RufflePlayer.vue'
import { ref, computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
// import '@/assets/js/ruffle/ruffle.js'
const currentLocation = ref(window.location.href)
const route = useRoute()
const swf = route.query.swf
const swfPath = 'swf/' + swf + '.swf'
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const swfName = ref(capitalize(swf))
let isNotReloaded = ref(false)
if (route.query.reloaded) {
  isNotReloaded = ref(false)
} else {
  isNotReloaded = ref(true)
}
</script>

<style>

</style>

<template>
    <div class="about">
      <h1>This is an flashes page<br>(developing...)</h1>
      <p>{{ $route.params.swf_name }}</p>
    </div>
    <router-link />
</template>

<script setup>
// from { $route } import 'vue-router'
/* const props = defineProps({
  swf_name: String
}) */
/* const swf = props.swf_name
document.body.append(swf) */
/* var flashName = props.swf_name
document.body.append(flashName)
const swf = $route.params.swf_name
document.body.append('params from vue-router: ' + swf) */
</script>

<style>

</style>

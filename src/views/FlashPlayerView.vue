<template>
    <div class="about">
      <h1>This is an flashes page<br>(developing...)</h1>
    </div>
    <router-link />
</template>

<script setup>
const props = defineProps({
  swf_name: String
})
var flashName = props.swf_name
alert(flashName)
</script>

<style>

</style>

<template>
  <!-- Page header with logo and tagline-->
  <header class="py-5 bg-light border-bottom mb-4">
    <div class="container">
      <div class="text-center my-1">
        <h1 class="fw-bolder">Flash Player PWA(DEMO)</h1>
        <p class="lead mb-0">Run flash on browser. You can also use this application offline!</p>
      </div>
    </div>
  </header>
  <!-- Page content-->
  <div class="container">
    <div class="row">
      <!-- Cards entries-->
      <div class="col-lg-12 py-5">
        <!-- Description and link to flashes page -->
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">&#9888; Notice</h2><hr>
            <p class="card-text">This site is under development and the service worker is currently not set up properly, so when used offline, the flash player and swf files may not be loaded properly.</p>
          </div>
        </div>
      </div>
      <!-- Cards entries-->
      <div class="col-lg-12">
        <!-- Description and link to flashes page -->
        <div class="card">
          <a href="#/"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
          <div class="card-body">
            <h2 class="card-title">Run flash on browser!</h2>
            <p class="card-text">The site is designed to run Flash on the web. The source code is located on GitHub, and is distributed under the MIT License. It operates using the ruffle flash emulator. It is built as a progressive web app and works offline.</p>
            <a class="btn btn-primary" href="#/flashes">View available flash files →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<script setup lang="ts"></script>

<template>
  <div
    class="mx-auto xl:ml-64 container flex flex-col min-h-screen site-container"
  >
    <NavBar />
    <div class="mb-4 mx-2 sm:mx-4 grow py-4">
      <NuxtPage class="my-12" />
    </div>
    <Footer />
  </div>
</template>

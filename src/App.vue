<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './views/Navbar.vue'
</script>

<template>
  <div class="app-full-height bg-(--color-figma-neutral-100) py-(--figma-spacing-300) px-(--figma-spacing-1200)">
    <Navbar />
  </div>
</template>

<style scoped>
.app-full-height {
  height: 100vh;
}
</style>

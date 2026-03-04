<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './views/main-header/Navbar.vue'
import FlashcardMainContainer from './views/flashcard/FlashcardMainContainer.vue';
</script>

<template>
  <div class="app-full-height bg-(--color-figma-neutral-100) py-(--figma-spacing-300) px-(--figma-spacing-1200)">
    <Navbar />
    <div class="grid grid-cols-12 mt-(--figma-spacing-300) lg:mt-(--figma-spacing-400)">
      <FlashcardMainContainer class="col-span-12 lg:col-span-8" />
    </div>
  </div>
</template>

<style scoped>
.app-full-height {
  height: 100vh;
}
</style>

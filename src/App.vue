<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './views/main-header/Navbar.vue'
import FlashcardMainContainer from './views/flashcard/FlashcardMainContainer.vue';
import StudyStatisticsContainer from './views/study-statistics/StudyStatisticsContainer.vue';
</script>

<template>
  <div class="h-[100vh] w-full bg-(--color-figma-neutral-100)">
    <div class="app-full-height m-auto py-(--figma-spacing-300) px-(--figma-spacing-1200)">
      <Navbar />
      <div class="grid grid-cols-12 mt-(--figma-spacing-300) lg:mt-(--figma-spacing-400) gap-(--figma-spacing-300) lg:gap-(--figma-spacing-400)">
        <FlashcardMainContainer class="col-span-12 lg:col-span-8" />
        <StudyStatisticsContainer class="col-span-12 lg:col-span-4 mt-(--figma-spacing-300) lg:mt-0" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-full-height {
  height: 100vh;
  max-width: 1200px;
}
</style>

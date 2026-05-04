<script setup lang="ts">
import Navbar from './views/main-header/Navbar.vue'
import { useStateStore } from './stores/state';
import StudyMode from './views/modes/StudyMode.vue';
import AllCards from './views/modes/AllCards.vue';

const state = useStateStore();
</script>

<template>
  <div class="min-h-[100vh] w-full bg-(--color-figma-neutral-100)">
    <div class="app-full-height m-auto py-(--figma-spacing-300) px-(--figma-spacing-1200)">
      <Navbar />
      <StudyMode v-if="state.appModes[0].active" />
      <AllCards v-else-if="state.appModes[1].active" />
    </div>
  </div>
</template>

<style scoped>
.app-full-height {
  height: 100%;
  max-width: 1400px;
}
</style>

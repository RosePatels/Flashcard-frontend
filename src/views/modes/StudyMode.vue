<template>
<div class="grid grid-cols-12 mt-(--figma-spacing-300) lg:mt-(--figma-spacing-400) gap-(--figma-spacing-300) lg:gap-(--figma-spacing-400)">
        <FlashcardMainContainer class="col-span-12 lg:col-span-8" />
        <StudyStatisticsContainer class="col-span-12 lg:col-span-4 mt-(--figma-spacing-300) lg:mt-0" />
      </div>
</template>

<script setup lang="ts">
import FlashcardMainContainer from '../flashcard/FlashcardMainContainer.vue';
import StudyStatisticsContainer from '../study-statistics/StudyStatisticsContainer.vue';
</script>

<style scoped>

</style>
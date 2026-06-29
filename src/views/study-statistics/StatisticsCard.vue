<template>
    <div class="grid grid-cols-4 border-1 border-solid border-(--color-figma-neutral-900) rounded-(--figma-spacing-150) statistics-card mb-(--figma-spacing-250)">
        <div class="col-span-3 border-r-1 border-solid border-(--color-figma-neutral-900))) p-(--figma-spacing-250) ">
            <h3 class="text-preset-4">Total Cards</h3>
            <div class="text-preset-1">{{ stateStore.flashcards.length }}</div>
        </div>
        <div class="flex items-center justify-center col-span-1 bg-(--color-blue-400) rounded-r-(--figma-spacing-125)">
            <img class="hidden sm:block" src="../../assets/images/icon-stats-total.svg" alt="Logo" />
        </div>
    </div>

     <div class="grid grid-cols-4 border-1 border-solid border-(--color-figma-neutral-900) rounded-(--figma-spacing-150) statistics-card mb-(--figma-spacing-250)">
        <div class="col-span-3 border-r-1 border-solid border-(--color-figma-neutral-900))) p-(--figma-spacing-250) ">
            <h3 class="text-preset-4">Mastered</h3>
            <div class="text-preset-1">{{ getMasteredCount() }}</div>
        </div>
        <div class="flex items-center justify-center col-span-1 bg-(--color-teal-400) rounded-r-(--figma-spacing-125)">
            <img class="hidden sm:block" src="../../assets/images/icon-stats-mastered.svg" alt="Logo" />
        </div>
    </div>

     <div class="grid grid-cols-4 border-1 border-solid border-(--color-figma-neutral-900) rounded-(--figma-spacing-150) statistics-card mb-(--figma-spacing-250)">
        <div class="col-span-3 border-r-1 border-solid border-(--color-figma-neutral-900))) p-(--figma-spacing-250) ">
            <h3 class="text-preset-4">In Progress</h3>
            <div class="text-preset-1">{{ getInProgressCount() }}</div>
        </div>
        <div class="flex items-center justify-center col-span-1 bg-(--color-pink-500) rounded-r-(--figma-spacing-125)">
            <img class="hidden sm:block" src="../../assets/images/icon-stats-in-progress.svg" alt="Logo" />
        </div>
    </div>

     <div class="grid grid-cols-4 border-1 border-solid border-(--color-figma-neutral-900) rounded-(--figma-spacing-150) statistics-card">
        <div class="col-span-3 border-r-1 border-solid border-(--color-figma-neutral-900))) p-(--figma-spacing-250) ">
            <h3 class="text-preset-4">Not Started</h3>
            <div class="text-preset-1">{{ getNotStartedCount() }}</div>
        </div>
        <div class="flex items-center justify-center col-span-1 bg-(--color-pink-400) rounded-r-(--figma-spacing-125)">
            <img class="hidden sm:block" src="../../assets/images/icon-stats-not-started.svg" alt="Logo" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';

const stateStore = useStateStore();

const getMasteredCount = () => {
    return stateStore.flashcards.filter(card => card.masteryProgress === 5).length;
}

const getInProgressCount = () => {
    return stateStore.flashcards.filter(card => card.masteryProgress > 0 && card.masteryProgress < 5).length;
}

const getNotStartedCount = () => {
    return stateStore.flashcards.filter(card => card.masteryProgress === 0).length;
}
</script>

<style scoped>
.statistics-card {
    background-color: white;
    border-left: 1px solid var(--color-figma-neutral-900);
    border-top: 1px solid var(--color-figma-neutral-900);
    border-right: 2px solid var(--color-figma-neutral-900);
    border-bottom: 2px solid var(--color-figma-neutral-900);
}
</style>
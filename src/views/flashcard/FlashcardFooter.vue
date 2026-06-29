<template>
<div class="flashcard-footer flex items-center justify-around">
    <button @click="previousFlashcard" class="flex cursor-pointer text-preset-4 px-(--figma-spacing-200) py-(--figma-spacing-150) rounded-(--figma-radius-full) border border-(--color-figma-neutral-900) hover:bg-(--color-figma-neutral-100)">
        <img
            class="hidden sm:block mr-(--figma-spacing-100)"
            src="../../assets/images/icon-chevron-left.svg"
            alt="Logo"
        />
        Previous
    </button>
    <div class="text-preset-5 text-(--color-figma-neutral-600)"> Card {{ stateStore.currentFlashcardIndex + 1 }} of {{ stateStore.flashcards.length }} </div>
    <button class="ml-4 flex cursor-pointer text-preset-4 px-(--figma-spacing-200) py-(--figma-spacing-150) rounded-(--figma-radius-full) border border-(--color-figma-neutral-900) hover:bg-(--color-figma-neutral-100)"  @click="nextFlashcard">Next
         <img
            class="hidden sm:block ml-(--figma-spacing-75)"
            src="../../assets/images/icon-chevron-right.svg"
            alt="Logo"
        />
    </button>
</div>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';

const stateStore = useStateStore();

const previousFlashcard = () => {
    stateStore.currentFlashcardIndex = (stateStore.currentFlashcardIndex - 1 + stateStore.flashcards.length) % stateStore.flashcards.length;
    stateStore.showAnswer = false;
}

const nextFlashcard = () => {
    stateStore.currentFlashcardIndex = (stateStore.currentFlashcardIndex + 1) % stateStore.flashcards.length;
    stateStore.showAnswer = false;
}


</script>

<style scoped>
.flashcard-footer {
    padding: 20px;
}
</style>
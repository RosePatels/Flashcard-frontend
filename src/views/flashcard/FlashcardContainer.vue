<template>
    <div class="flashcard-container">
        <Flashcard />
        <div class="flex items-center justify-center mt-4">
            <button class="mr-8 flex cursor-pointer bg-(--color-figma-yellow-500) text-preset-4 px-(--figma-spacing-250) py-(--figma-spacing-150) rounded-(--figma-radius-full) border border-(--color-figma-neutral-900) drop-shadow-[2px_2px_0px_var(--color-figma-neutral-900)] hover:bg-(--color-figma-pink-400)" @click="knowAnswer">
                 <img
                    class="hidden sm:block mr-(--figma-spacing-100)"
                    src="../../assets/images/icon-circle-check.svg"
                    alt="Logo"
                />
                I Know This
            </button>
            <button class="flex cursor-pointer bg-(--color-figma-red-500) text-preset-4 px-(--figma-spacing-250) py-(--figma-spacing-150) rounded-(--figma-radius-full) border-progress hover:bg-(--color-figma-neutral-100) " @click="resetProgress">
                 <img
                    class="hidden sm:block mr-(--figma-spacing-100)"
                    src="../../assets/images/icon-reset.svg"
                    alt="Logo"
                />
                Reset Progress
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
import Flashcard from './Flashcard.vue';
import { updateFlashcard } from '@/services/FlashcardsService.ts';

const stateStore = useStateStore();

const knowAnswer = async () => {
    const currentFlashcard = stateStore.flashcards[stateStore.currentFlashcardIndex];
    if (currentFlashcard.masteryProgress < 5) {
        currentFlashcard.masteryProgress += 1;
    }
    await updateFlashcard(currentFlashcard);
    if(stateStore.mastered && currentFlashcard.masteryProgress >= 5) {
        stateStore.deleteFlashcardFromStore(currentFlashcard);
    }
}

const resetProgress = async () => {
    const currentFlashcard = stateStore.flashcards[stateStore.currentFlashcardIndex];
    currentFlashcard.masteryProgress = 0;
    await updateFlashcard(currentFlashcard);
}
</script>

<style scoped>
.flashcard-container {
    padding: 20px;
    border-top: 1px solid var(--color-figma-neutral-900);
    border-bottom: 1px solid var(--color-figma-neutral-900);
}

.border-progress {
    border-left: 1px solid var(--color-figma-neutral-900);
    border-top: 1px solid var(--color-figma-neutral-900);
    border-right: 3px solid var(--color-figma-neutral-900);
    border-bottom: 3px solid var(--color-figma-neutral-900);
}
</style>
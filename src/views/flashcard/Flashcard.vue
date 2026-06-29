<template>
    <div class="bg-(--color-figma-pink-400) p-(--figma-spacing-300) drop-shadow-[1px_2px_0px_var(--color-figma-neutral-900)] flex flex-col items-center justify-center rounded-(--figma-radius-16) border-1 border-solid border-(--color-figma-neutral-900) h-[360px] bg-[url('src/assets/images/pattern-flashcard-bg.svg')] cursor-pointer" @click="revealAnswer">
        <div class="flex items-center justify-center">
            <div class="bg-(--color-figma-neutral-0) drop-shadow-[1px_2px_0px_var(--color-figma-neutral-900)] rounded-(--figma-radius-full) px-(--figma-spacing-150) py-(--figma-spacing-100) text-preset-6 border-1 border-solid border-(--color-figma-neutral-900)">{{ stateStore.flashcards[stateStore.currentFlashcardIndex]?.category }}</div>
        </div>

        <div v-if="!stateStore.showAnswer" class="text-center flex-grow flex justify-center flex-col">
            <div class="text-preset-1">{{ stateStore.flashcards[stateStore.currentFlashcardIndex]?.question }}</div>
            <div class="text-preset-4 mt-(--figma-spacing-100) text-(--color-figma-neutral-900)/80">Click to reveal answer</div>
        </div>

        <div v-else class="text-center flex-grow flex justify-center flex-col">
             <div class="text-preset-4 text-(--color-figma-neutral-900)/80">Answer:</div>
            <div class="text-preset-2 mt-(--figma-spacing-100)">{{ stateStore.flashcards[stateStore.currentFlashcardIndex]?.answer }}</div>

        </div>

        <div class="">

            <div class="text-preset-6">{{ stateStore.flashcards[stateStore.currentFlashcardIndex]?.masteryProgress }}/5</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStateStore } from '@/stores/state';

const stateStore = useStateStore();

const revealAnswer = () => {
    stateStore.showAnswer = !stateStore.showAnswer;
}

</script>

<style scoped>

</style>
<template>
<div class="py-(--figma-spacing-400) flex items-center justify-between">
     <div class="flex items-center">
        <div class="relative mr-5">
            <button class="flex cursor-pointer text-preset-4 px-(--figma-spacing-200) py-(--figma-spacing-150) rounded-(--figma-radius-full) border border-(--color-figma-neutral-900) hover:bg-(--color-figma-neutral-100) bg-(--color-figma-neutral-0)" @click.stop="toggleCategoriesDropdown">All Categories
                <img
                    class="hidden sm:block ml-(--figma-spacing-100)"
                    src="../../assets/images/icon-chevron-down.svg"
                    alt="Logo"
                />
            </button>
            <CategoriesDropdown v-if="visibleDropdown" class="absolute top-[110%] left-[0%]" @close="closeCategoriesDropdown" />
        </div>
        <input type="checkbox" id="hideMastered" v-model="stateStore.mastered" @change="hideMastered" />
        <label for="hideMastered" class="ml-(--figma-spacing-150) text-preset-4">Hide Mastered</label>
    </div>
    <button class="ml-4 bg-(--color-figma-neutral-0) flex cursor-pointer text-preset-4 px-(--figma-spacing-200) py-(--figma-spacing-150) rounded-(--figma-radius-full) border border-(--color-figma-neutral-900) hover:bg-(--color-figma-neutral-0)" @click="shuffleCards">
         <img
            class="hidden sm:block mr-(--figma-spacing-100)"
            src="../../assets/images/icon-shuffle.svg"
            alt="Logo"
        />
        Shuffle
    </button>
 </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStateStore } from "@/stores/state";
import { getFlashcards } from "@/services/FlashcardsService";
import CategoriesDropdown from "./CategoriesDropdown.vue";

const stateStore = useStateStore();
const visibleDropdown = ref(false);

const toggleCategoriesDropdown = () => visibleDropdown.value = !visibleDropdown.value;
const closeCategoriesDropdown = () => visibleDropdown.value = false;

const hideMastered = async () => {
    if(stateStore.mastered) {
        const filteredFlashcards = stateStore.flashcards.filter(flashcard => flashcard.masteryProgress < 5);
        stateStore.flashcards = filteredFlashcards;
    } else {
        const allFlashcards = await getFlashcards();
        stateStore.flashcards = allFlashcards.data;
    }
    stateStore.currentFlashcardIndex = 0;
}

const shuffleCards = () => {
    for (let i = stateStore.flashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [stateStore.flashcards[i], stateStore.flashcards[j]] = [stateStore.flashcards[j], stateStore.flashcards[i]];
    }
    stateStore.currentFlashcardIndex = 0;
}
</script>

<style scoped>

</style>
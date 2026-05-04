<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--figma-spacing-300)">
        <div v-for="(card) in data.flashcards" class="flashcard-display-container grid grid-rows-[auto_1fr_auto]">
            <div class="text-preset-3 p-(--figma-spacing-200)">{{ card.question }}</div>
            <div class="border-y-1 border-(--color-figma-neutral-900) p-(--figma-spacing-200)">
                <div class="text-preset-5 opacity-60 mb-(--figma-spacing-75)">Answer: </div>
                <div>{{ card.answer }}</div>
            </div>
            <div class="grid items-center grid-cols-[auto_1fr_auto] items-center">
                <div class="p-(--figma-spacing-200) pr-(--figma-spacing-125) border-r-1 border-solid border-(--color-figma-neutral-900)">
                    <div class="bg-(--color-figma-neutral-0) drop-shadow-[1px_2px_0px_var(--color-figma-neutral-900)] rounded-(--figma-radius-full) px-(--figma-spacing-150) py-(--figma-spacing-100) text-preset-6 border-1 border-solid border-(--color-figma-neutral-900)">{{ card.category }}</div>
                </div>

                <div class="p-(--figma-spacing-200)">
                    <div class="text-preset-6">0/5</div>
                </div>

                <div class="border-l-1 self-stretch border-solid border-(--color-figma-neutral-900) flex items-center justify-center w-[45px]">
                    <img class="hidden sm:block" src="../../assets/images/icon-menu.svg" alt="Logo" />
                </div>
            </div>
        </div>
    </div>
</template> 


<script setup lang="ts">
import data from "../../assets/data.json";
</script>

<style scoped>
.flashcard-display-container {
    background-color: white;
    border-left: 1px solid var(--color-figma-neutral-900);
    border-top: 1px solid var(--color-figma-neutral-900);
    border-right: 3px solid var(--color-figma-neutral-900);
    border-bottom: 3px solid var(--color-figma-neutral-900);
    border-radius: 16px;
}
</style>
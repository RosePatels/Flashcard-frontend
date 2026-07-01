<template>
 <div ref="menuRef" class="border-solid border-1 border-(--color-figma-neutral-900) bg-(--color-figma-neutral-0) w-[260px] rounded-(--figma-radius-8) z-1">
        <div v-for="(value, key, index) in categories" :key="key">
            <div class="py-(--figma-spacing-100) px-(--figma-spacing-200) flex w-full cursor-pointer items-center" :class="{ 'category-border': index !== Object.keys(categories).length - 1}">
                <input
                    type="checkbox"
                    class="mr-3"
                    :checked="stateStore.selectedCategories.includes(key)"
                    @change="filterFlashcardsBasedOnCategories(key, $event)"
                />
                <label>{{ key }}
                 <span class="ml-1 text-(--color-figma-neutral-600) text-preset-5">({{ value }})</span>
                 </label>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useStateStore } from '@/stores/state';
import { storeToRefs } from 'pinia';
import { getFlashcards } from "@/services/FlashcardsService";
import type { Flashcard } from "@/services/FlashcardsService";

const emit = defineEmits(['close']);
const stateStore = useStateStore();
const { selectedCategories } = storeToRefs(stateStore);
const menuRef = ref<HTMLElement | null>(null);
const categories = ref<Record<string, number>>({});

function onDocumentClick(e: MouseEvent) {
    if (!menuRef.value) return;
    const target = e.target as Node | null;
    if (!target) return;

    if (!menuRef.value.contains(target)) {
        emit('close');
    }
}

onMounted(async () => {
    categories.value = await getCategories();
    if (selectedCategories.value.length === 0) {
        selectedCategories.value = Object.keys(categories.value);
    }
    document.addEventListener('click', onDocumentClick);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', onDocumentClick);
});

const getCategories = async () => {
    const catgoriesCount: Record<string, number> = {};
    const allFlashcards = await getFlashcards();
    allFlashcards.data.forEach((flashcard: Flashcard) => {
        if(flashcard.category && !(flashcard.category in catgoriesCount)) {
            catgoriesCount[flashcard.category] = 0;
        }

        if(flashcard.category) {
            catgoriesCount[flashcard.category]++;
        }
    });
    return catgoriesCount;
}

const filterFlashcardsBasedOnCategories = async (key: string, event: Event) => {
    const checkbox = event.target as HTMLInputElement | null;
    if (!checkbox) return;

    if (checkbox.checked) {
        selectedCategories.value.push(key);
    } else {
        const index = selectedCategories.value.findIndex(category => category === key);
        if (index !== -1) {
            selectedCategories.value.splice(index, 1);
        }
    }

    const allFlashcards = await getFlashcards();
    const filteredFlashcards = allFlashcards.data.filter((flashcard: Flashcard) => flashcard.category && selectedCategories.value.includes(flashcard.category));
    stateStore.flashcards = filteredFlashcards;
}

</script>

<style scoped>
.category-border {
    border-bottom: 1px solid var(--color-figma-neutral-900);
}
</style>
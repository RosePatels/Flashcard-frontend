<template>
 <div ref="menuRef" class="border-solid border-1 border-(--color-figma-neutral-900) bg-(--color-figma-neutral-0) w-[260px] rounded-(--figma-radius-8) z-1">
        <div v-for="(value, key, index) in categories" :key="key">
            <div class="py-(--figma-spacing-100) px-(--figma-spacing-200) flex w-full cursor-pointer items-center" :class="{ 'category-border': index !== Object.keys(categories).length - 1}">
                <input type="checkbox" class="mr-3" />
                {{ key }}
                 <span class="ml-1 text-(--color-figma-neutral-600) text-preset-5">({{ value }})</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useStateStore } from '@/stores/state';

const emit = defineEmits(['close']);
const stateStore = useStateStore();
const menuRef = ref<HTMLElement | null>(null);
const categories = ref({});

function onDocumentClick(e: MouseEvent) {
    if (!menuRef.value) return;
    const target = e.target as Node | null;
    if (!target) return;
    if (!menuRef.value.contains(target)) {
        emit('close');
    }
}

onMounted(() => {
    categories.value = getCategories();
    document.addEventListener('click', onDocumentClick);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', onDocumentClick);
});

const getCategories = () => {
    const catgoriesCount: Record<string, number> = {};
    stateStore.flashcards.forEach(flashcard => {
        if(flashcard.category && !(flashcard.category in catgoriesCount)) {
            catgoriesCount[flashcard.category] = 0;
        }

        if(flashcard.category) {
            catgoriesCount[flashcard.category]++;
        }
    });
    return catgoriesCount;
}
</script>

<style scoped>
.category-border {
    border-bottom: 1px solid var(--color-figma-neutral-900);
}
</style>
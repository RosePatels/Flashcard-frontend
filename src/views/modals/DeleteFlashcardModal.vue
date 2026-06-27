<template>
<Teleport to="body">
    <div v-if="visible" class="modal">
        <div ref="dialogRef" class="bg-white rounded-lg shadow-lg w-[400px] delete-flashcard-container">
            <div>
                <div class="flex flex-col justify-start p-(--figma-spacing-300) border-b-1 border-b border-solid border-(--color-figma-neutral-900)">
                    <div class="text-preset-2 pb-(--figma-spacing-100)">Delete this card?</div>
                    <div class="text-preset-4">This action can't be undone.</div>
                </div>
                <div class="flex justify-end p-(--figma-spacing-250)">
                    <button class="cursor-pointer text-preset-4-semibold px-(--figma-spacing-250) py-(--figma-spacing-150) rounded-(--figma-radius-full) border border-(--color-figma-neutral-900) hover:bg-(--color-figma-neutral-100) mr-(--figma-spacing-125)" @click="emit('close')">Cancel</button>
                     <button class="cursor-pointer bg-(--color-figma-yellow-500) text-preset-4-semibold px-(--figma-spacing-250) py-(--figma-spacing-150) rounded-(--figma-radius-full) border border-(--color-figma-neutral-900) drop-shadow-[2px_2px_0px_var(--color-figma-neutral-900)] hover:bg-(--color-figma-pink-400)" @click="deleteExistingFlashcard">Delete Card</button>
                </div>
                <div v-if="error">{{ error }}</div>
            </div>
        </div>
    </div>
</Teleport>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { useStateStore } from '../../stores/state';
import { deleteFlashcard } from "@/services/FlashcardsService";
import type { Flashcard } from "@/services/FlashcardsService";

const emit = defineEmits(['close']);
const stateStore = useStateStore();
const visible = defineModel('visible', { type: Boolean, required: true });
const dialogRef = ref<HTMLElement | null>(null);
const error = ref<any>(null);

const flashcard = ref<Flashcard>({
    question: null,
    answer: null,
    category: null
})

onMounted(() => {
    document.addEventListener('click', onModalClick);
    flashcard.value = { ...stateStore.deleteFlashcardModalInfo };
})

watch(() => stateStore.deleteFlashcardModalInfo?.id, () => {
    flashcard.value = { ...stateStore.deleteFlashcardModalInfo };
})

const onModalClick = (e: MouseEvent) => {
    if(!dialogRef.value) return;
    const target = e.target as Node | null;
    if(!target) return;
    if(!dialogRef.value.contains(target)) {
        emit('close');
    }
}

const deleteExistingFlashcard = async () => {
    try {
        const deletedFlashcard = await deleteFlashcard(flashcard.value.id);
        stateStore.deleteFlashcardFromStore(flashcard.value);
        emit('close');
    } catch(error) {
        error.value = error;
    }
}

onBeforeUnmount(() => {
    document.removeEventListener('click', onModalClick);
})


</script>


<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.delete-flashcard-container {
    background-color: white;
    border-left: 1px solid var(--color-figma-neutral-900);
    border-top: 1px solid var(--color-figma-neutral-900);
    border-right: 3px solid var(--color-figma-neutral-900);
    border-bottom: 3px solid var(--color-figma-neutral-900);
    border-radius: 16px;
}

</style>
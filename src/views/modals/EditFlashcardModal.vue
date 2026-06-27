<template>
<Teleport to="body">
    <div v-if="visible" class="modal">
        <div ref="dialogRef" class="bg-white p-(--figma-spacing-300) rounded-lg shadow-lg w-[400px] edit-flashcard-container">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-preset-2">Edit Flashcard</h2>
                <div class="cross cursor-pointer" @click="emit('close')">
                    <img
                            class="hidden sm:block"
                            src="../../assets/images/icon-cross.svg"
                            alt="Logo"
                        />
                </div>
            </div>

            <div class="">
                <label class="text-preset-4-medium">Question</label>
                <input type="text" v-model="flashcard.question" class="w-full p-(--figma-spacing-200) border border-(--color-figma-neutral-900) mt-(--figma-spacing-100) mb-(--figma-spacing-200) rounded-(--figma-radius-6)" placeholder="What does HTML stand for?" />
                <label class="text-preset-4-medium mt-(--figma-spacing-300)">Answer</label>
                <input type="text" v-model="flashcard.answer" class="w-full p-(--figma-spacing-200) border border-(--color-figma-neutral-900) mt-(--figma-spacing-100) mb-(--figma-spacing-200) rounded-(--figma-radius-6)" placeholder="HyperText Markup Language" />
                <label class="text-preset-4-medium mt-(--figma-spacing-300)">Category</label>
                <input type="text" v-model="flashcard.category" class="w-full p-(--figma-spacing-200) border border-(--color-figma-neutral-900) mt-(--figma-spacing-100) mb-(--figma-spacing-200) rounded-(--figma-radius-6)" placeholder="Web Development" />
                <div class="flex justify-end ">
                    <button class="cursor-pointer bg-(--color-figma-yellow-500) text-preset-4-semibold px-(--figma-spacing-250) py-(--figma-spacing-150) rounded-(--figma-radius-full) border border-(--color-figma-neutral-900) drop-shadow-[2px_2px_0px_var(--color-figma-neutral-900)] hover:bg-(--color-figma-pink-400)" @click="updateExistingFlashcard">Update Card</button>
                </div>
            </div>

            <div v-if="error">{{ error }}</div>
        </div>
    </div>
</Teleport>

</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { useStateStore } from '../../stores/state';
import { updateFlashcard } from "@/services/FlashcardsService";
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
    flashcard.value = { ...stateStore.editFlashcardModalInfo };
})

watch(() => stateStore.editFlashcardModalInfo?.id, () => {
    flashcard.value = { ...stateStore.editFlashcardModalInfo };
})

const onModalClick = (e: MouseEvent) => {
    if(!dialogRef.value) return;
    const target = e.target as Node | null;
    if(!target) return;
    if(!dialogRef.value.contains(target)) {
        emit('close');
    }
}

const updateExistingFlashcard = async () => {
    try {
        const updatedFlashcard = await updateFlashcard(flashcard.value);
        stateStore.updateFlashcardInStore(updatedFlashcard.data);
        emit('close');
    } catch(error: any) {
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

.edit-flashcard-container {
    background-color: white;
    border-left: 1px solid var(--color-figma-neutral-900);
    border-top: 1px solid var(--color-figma-neutral-900);
    border-right: 3px solid var(--color-figma-neutral-900);
    border-bottom: 3px solid var(--color-figma-neutral-900);
    border-radius: 16px;
}

.cross {
    border-radius: 4px;
    padding: 4px;
}

.cross:hover {
    border-left: 1px solid var(--color-figma-neutral-900);
    border-top: 1px solid var(--color-figma-neutral-900);
    border-right: 3px solid var(--color-figma-neutral-900);
    border-bottom: 3px solid var(--color-figma-neutral-900);
}
</style>
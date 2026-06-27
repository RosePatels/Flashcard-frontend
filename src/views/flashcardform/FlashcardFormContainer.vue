<template>
<div class="flashcard-form-container p-(--figma-spacing-400) mt-(--figma-spacing-400) flex flex-col">
    <label class="text-preset-4-medium mb-(--figma-spacing-100)">Question</label>
    <input type="text" v-model="flashcard.question" class="w-full p-(--figma-spacing-200) border border-(--color-figma-neutral-900) rounded-(--figma-radius-6)" 
    :class="{ 'invalid-border': invalidFields.question }"
    @input="updateInvalidFields"
    placeholder="e.g., What is the capital of France?" />
    <small v-if="invalidFields.question" class="test-preset-5 text-(--color-figma-pink-700) flex items-center mt-(--figma-spacing-50)"><span>
        <img
            class="hidden sm:block mr-(--figma-spacing-100)"
            src="../../assets/images/icon-error.svg"
            alt="Logo"
        />
    </span>Please enter a question.</small>

    <label class="text-preset-4-medium mt-(--figma-spacing-200) mb-(--figma-spacing-100)">Answer</label>
    <input type="text" v-model="flashcard.answer" class="w-full p-(--figma-spacing-200) border border-(--color-figma-neutral-900) rounded-(--figma-radius-6)" 
    :class="{ 'invalid-border': invalidFields.answer }"
    @input="updateInvalidFields"
    placeholder="e.g., Paris" />
     <small v-if="invalidFields.answer" class="test-preset-5 text-(--color-figma-pink-700) flex items-center mt-(--figma-spacing-50)"><span>
        <img
            class="hidden sm:block mr-(--figma-spacing-100)"
            src="../../assets/images/icon-error.svg"
            alt="Logo"
        />
    </span>Please enter an answer.</small>

    <label class="text-preset-4-medium mt-(--figma-spacing-200) mb-(--figma-spacing-100)">Category</label>
    <input type="text" v-model="flashcard.category" class="w-full p-(--figma-spacing-200) border border-(--color-figma-neutral-900) rounded-(--figma-radius-6)"
    :class="{ 'invalid-border': invalidFields.category }"
    @input="updateInvalidFields"
     placeholder="e.g., Geography" />
     <small v-if="invalidFields.category" class="test-preset-5 text-(--color-figma-pink-700) flex items-center mt-(--figma-spacing-50)"><span>
        <img
            class="hidden sm:block mr-(--figma-spacing-100)"
            src="../../assets/images/icon-error.svg"
            alt="Logo"
        />
    </span>Please enter a category.</small>

    <div class="mt-(--figma-spacing-300)"> 
        <button class="flex cursor-pointer bg-(--color-figma-yellow-500) text-preset-4-semibold px-(--figma-spacing-250) py-(--figma-spacing-150) rounded-(--figma-radius-full) border border-(--color-figma-neutral-900) drop-shadow-[2px_2px_0px_var(--color-figma-neutral-900)] hover:bg-(--color-figma-pink-400)" @click="createNewFlashcard">
            <img
                                class="hidden sm:block mr-(--figma-spacing-100)"
                                src="../../assets/images/icon-circle-plus.svg"
                                alt="Logo"
                            />
            Create Card
        </button>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createFlashcard } from '../../services/FlashcardsService';
import { useStateStore } from '@/stores/state';

const stateStore = useStateStore();
const flashcard = ref({
    question: null,
    answer: null,
    category: null
})

const invalidFields = ref({
    question: false,
    answer: false,
    category: false
});

const emptyFlashcard = ref({
    question: null,
    answer: null,
    category: null
});

const createNewFlashcard = async () => {
    try {
        validateFields();
        if(checkIfInvalidFields()) return;
        const createdFlashcard = await createFlashcard(flashcard.value);
        stateStore.addFlashcardToStore(createdFlashcard.data);
        flashcard.value = { ...emptyFlashcard.value };
    } catch (error) {
        console.error('Error creating flashcard:', error);
    }
}

const validateFields = () => {
    if(!flashcard.value.question) {
        invalidFields.value.question = true;
    }

    if(!flashcard.value.answer) {
        invalidFields.value.answer = true;
    }

    if(!flashcard.value.category) {
        invalidFields.value.category = true;
    }
}

const checkIfInvalidFields = () => {
    for(let key in invalidFields.value) {
        if(invalidFields.value[key]) {
            return true;
        }
    }
    return false;
}

const updateInvalidFields = () => {
    if(!checkIfInvalidFields()) return;

    if(flashcard.value.question) {
        invalidFields.value.question = false;
    }

    if(flashcard.value.answer) {
        invalidFields.value.answer = false
    }

    if(flashcard.value.category) {
        invalidFields.value.category = false;
    }

     if(!flashcard.value.question) {
        invalidFields.value.question = true;
    }

    if(!flashcard.value.answer) {
        invalidFields.value.answer = true;
    }

    if(!flashcard.value.category) {
        invalidFields.value.category = true;
    }
}

</script>

<style scoped>
.flashcard-form-container {
    background-color: white;
    border-left: 1px solid var(--color-figma-neutral-900);
    border-top: 1px solid var(--color-figma-neutral-900);
    border-right: 3px solid var(--color-figma-neutral-900);
    border-bottom: 3px solid var(--color-figma-neutral-900);
    border-radius: 16px;
}

.invalid-border {
    border-left: 1px solid var(--color-figma-pink-700);
    border-top: 1px solid var(--color-figma-pink-700);
    border-right: 3px solid var(--color-figma-pink-700);
    border-bottom: 3px solid var(--color-figma-pink-700);
}
</style>
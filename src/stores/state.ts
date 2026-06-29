import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Flashcard } from '@/services/FlashcardsService';

export const useStateStore = defineStore('state', () => {

  const appModes = ref([
  {
    name: 'Study Mode',
    active: true,
  },
  {
    name: 'All Cards',
    active: false,
  }
]);

  const flashcards = ref<Flashcard[]>([]);
  const currentFlashcardIndex = ref(2);
  const showAnswer = ref(false);


  const editFlashcardModalInfo = ref<Flashcard>({
    question: null,
    answer: null,
    category: null,
    masteryProgress: 0
  });
  const deleteFlashcardModalInfo = ref<Flashcard>({
    question: null,
    answer: null,
    category: null,
    masteryProgress: 0
  });

  const addFlashcardToStore = (newFlashcard: Flashcard) => {
    flashcards.value.unshift(newFlashcard);
  }

  const updateFlashcardInStore = (updatedFlashcard: Flashcard) => {
    const index = flashcards.value.findIndex(card => card.id === updatedFlashcard.id);
    if (index !== -1) {
      flashcards.value[index] = updatedFlashcard;
    }
  }

  const deleteFlashcardFromStore = (flashcard: Flashcard) => {
    const index = flashcards.value.findIndex(card => card.id === flashcard.id);
    if (index !== -1) {
      flashcards.value.splice(index, 1);
    }
  }

  return { 
    appModes,
    editFlashcardModalInfo,
    deleteFlashcardModalInfo,
    deleteFlashcardFromStore,
    flashcards,
    updateFlashcardInStore,
    addFlashcardToStore,
    currentFlashcardIndex,
    showAnswer
   }
})
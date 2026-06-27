import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

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

  const flashcards = ref([]);
  const editFlashcardModalInfo = ref({});
  const deleteFlashcardModalInfo = ref({});

  const addFlashcardToStore = (newFlashcard) => {
    flashcards.value.unshift(newFlashcard);
  }

  const updateFlashcardInStore = (updatedFlashcard) => {
    const index = flashcards.value.findIndex(card => card.id === updatedFlashcard.id);
    if (index !== -1) {
      flashcards.value[index] = updatedFlashcard;
    }
  }

  const deleteFlashcardFromStore = (flashcard) => {
    const index = flashcards.value.findIndex(card => card.id === flashcard.id);
    if (index !== -1) {
      flashcards.value.splice(index, 1);
    }
  }

  return { 
    appModes,
    editFlashcardModalInfo,
    deleteFlashcardFromStore,
    flashcards,
    updateFlashcardInStore,
    addFlashcardToStore
   }
})
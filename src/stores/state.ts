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

  const addFlashcardToStore = (newFlashcard) => {
    flashcards.value.unshift(newFlashcard);
  }

  const updateFlashcardInStore = (updatedFlashcard) => {
    const index = flashcards.value.findIndex(card => card.id === updatedFlashcard.id);
    if (index !== -1) {
      flashcards.value[index] = updatedFlashcard;
    }
  }

  return { 
    appModes,
    editFlashcardModalInfo,
    flashcards,
    updateFlashcardInStore,
    addFlashcardToStore
   }
})
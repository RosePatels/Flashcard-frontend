import axios from "axios";

export interface Flashcard {
    id?: number;
    question: string | null;
    answer: string | null;
    category: string | null;
}

export async function getFlashcards() {
    const result = axios.get(`../api/flashcards/list`);
    return result;
}

export async function createFlashcard(flashcardRequest: Flashcard) {
    const result = axios.post(`../api/flashcards/create`, flashcardRequest);
    return result;
}
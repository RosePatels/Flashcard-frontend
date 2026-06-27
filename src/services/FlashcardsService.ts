import axios from "axios";

export interface Flashcard {
    id?: number;
    question: string | null;
    answer: string | null;
    category: string | null;
    masteryProgress: number;
}

export interface InvalidFieldError {
    question: boolean;
    answer: boolean;
    category: boolean;
}

export async function getFlashcards() {
    const result = axios.get(`../api/flashcards/list`);
    return result;
}

export async function createFlashcard(flashcardRequest: Flashcard) {
    const result = axios.post(`../api/flashcards/create`, flashcardRequest);
    return result;
}

export async function updateFlashcard(flashcardRequest: Flashcard) {
    const result = axios.put(`../api/flashcards/update/${flashcardRequest.id}`, flashcardRequest);
    return result;
}

export async function deleteFlashcard(flashcardId: number) {
    const result = axios.delete(`../api/flashcards/delete/${flashcardId}`);
    return result;
}
import axios from "axios";

export async function getFlashcards() {
    const result = axios.get(`../api/flashcards/list`);
    return result;
}
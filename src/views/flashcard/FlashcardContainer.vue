<template>
    <div class="flashcard-container">
        <Flashcard />
        <div class="flex items-center justify-center mt-4">
            <button class="mr-8">I Know This</button>
            <button>Reset Progress</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Flashcard from './Flashcard.vue';
</script>

<style scoped>
.flashcard-container {
    padding: 20px;
    border-top: 1px solid var(--color-figma-neutral-900);
    border-bottom: 1px solid var(--color-figma-neutral-900);
}
</style>
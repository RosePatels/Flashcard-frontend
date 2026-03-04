<template>
<div class="flashcard-main-container">
    <FlashcardHeader />
    <FlashcardContainer />
    <FlashcardFooter />
</div>
</template> 

<script setup lang="ts">
import FlashcardContainer from './FlashcardContainer.vue';
import FlashcardFooter from './FlashcardFooter.vue';
import FlashcardHeader from './FlashcardHeader.vue';
</script>

<style scoped>
.flashcard-main-container {
    background-color: white;
    border-left: 1px solid var(--color-figma-neutral-900);
    border-top: 1px solid var(--color-figma-neutral-900);
    border-right: 3px solid var(--color-figma-neutral-900);
    border-bottom: 3px solid var(--color-figma-neutral-900);
    border-radius: 16px;
}
</style>
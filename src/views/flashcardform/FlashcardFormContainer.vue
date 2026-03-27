<template>
<div class="flashcard-form-container p-(--figma-spacing-400) mt-(--figma-spacing-400)">
    <label class="text-preset-4-medium">Question</label>
    <input type="text" class="w-full p-(--figma-spacing-200) border border-(--color-figma-neutral-900) mt-(--figma-spacing-100) mb-(--figma-spacing-200) rounded-(--figma-radius-6)" placeholder="e.g., What is the capital of France?" />
    <label class="text-preset-4-medium mt-(--figma-spacing-300)">Answer</label>
    <input type="text" class="w-full p-(--figma-spacing-200) border border-(--color-figma-neutral-900) mt-(--figma-spacing-100) mb-(--figma-spacing-200) rounded-(--figma-radius-6)" placeholder="e.g., Paris" />
    <label class="text-preset-4-medium mt-(--figma-spacing-300)">Category</label>
    <input type="text" class="w-full p-(--figma-spacing-200) border border-(--color-figma-neutral-900) mt-(--figma-spacing-100) mb-(--figma-spacing-200) rounded-(--figma-radius-6)" placeholder="e.g., Geography" />
    <button class="cursor-pointer bg-(--color-figma-yellow-500) text-preset-4-semibold px-(--figma-spacing-250) py-(--figma-spacing-150) rounded-(--figma-radius-full) border border-(--color-figma-neutral-900) drop-shadow-[2px_2px_0px_var(--color-figma-neutral-900)] ">Create Card</button>
</div>
</template>

<script setup lang="ts">


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
</style>
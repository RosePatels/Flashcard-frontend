<template>
    <div ref="menuRef" class="border-solid border-1 border-(--color-figma-neutral-900) bg-(--color-figma-neutral-0) w-[140px] rounded-(--figma-radius-8)">
        <div>
            <button class="py-(--figma-spacing-100) px-(--figma-spacing-200) flex hover:bg-(--color-figma-neutral-100) w-full cursor-pointer border-b-1 border-solid border-(--color-figma-neutral-900) rounded-t-(--figma-radius-8)" @click.stop="$emit('edit')">
                <img class="hidden sm:block cursor-pointer vertical-ellipsis mr-(--figma-spacing-125)" src="../../assets/images/icon-edit.svg" alt="Logo" />
                Edit
            </button>
            <button class="py-(--figma-spacing-100) px-(--figma-spacing-200) flex hover:bg-(--color-figma-neutral-100) w-full cursor-pointer rounded-b-(--figma-radius-8)" @click.stop="$emit('delete')">
                <img class="hidden sm:block cursor-pointer vertical-ellipsis mr-(--figma-spacing-125)" src="../../assets/images/icon-delete.svg" alt="Logo" />
                 Delete
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const emit = defineEmits(['close', 'edit', 'delete']);

const menuRef = ref<HTMLElement | null>(null);

function onDocumentClick(e: MouseEvent) {
    if (!menuRef.value) return;
    const target = e.target as Node | null;
    if (!target) return;
    if (!menuRef.value.contains(target)) {
        emit('close');
    }
}

onMounted(() => {
    document.addEventListener('click', onDocumentClick);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', onDocumentClick);
});
</script>

<style scoped>

</style>
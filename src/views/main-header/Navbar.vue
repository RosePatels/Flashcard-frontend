<template>
<div class="flex items-center justify-between">
      <img src="../../../src/assets/images/logo-large.svg" alt="Logo" />
      <div class="flex bg-white text-preset-4-semibold drop-shadow-[1px_2px_0px_var(--color-figma-neutral-900)] p-(--figma-spacing-50) rounded-(--figma-radius-full) border-1 border-solid border-(--color-figma-neutral-900)">
            <template v-for="mode in appModes" :key="mode.name">
                  <button @click="setActiveMode(mode.name)" class="py-(--figma-spacing-125) px-(--figma-spacing-200) cursor-pointer border-1 border-solid border-transparent" :class="{ 'active-class': mode.active }">{{ mode.name }}</button>
            </template>
      </div>
</div>
</template> 

<script setup lang="ts">
import { ref } from 'vue';

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

const setActiveMode = (modeName: string) => {
      appModes.value.forEach(mode => {
            mode.active = mode.name === modeName;
      });
}
</script>

<style scoped>
.active-class {
  background-color: var(--color-figma-yellow-500);
  border: 1px solid var(--color-figma-neutral-900);
  border-radius: var(--figma-radius-full);
  cursor: default;
}    
</style>
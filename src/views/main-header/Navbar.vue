<template>
<div class="flex items-center justify-between">
      <!-- large logo: hidden on mobile, shown on tablet+ -->
      <img class="hidden sm:block" src="../../../src/assets/images/logo-large.svg" alt="Logo" />
      <!-- small logo: shown on mobile, hidden on tablet+ -->
      <img class="block sm:hidden" src="../../../src/assets/images/logo-small.svg" alt="Logo" />
      <div class="flex bg-white text-preset-4-semibold drop-shadow-[1px_2px_0px_var(--color-figma-neutral-900)] p-(--figma-spacing-50) rounded-(--figma-radius-full) border-1 border-solid border-(--color-figma-neutral-900)">
            <template v-for="mode in state.appModes" :key="mode.name">
                  <button @click="setActiveMode(mode.name)" class="py-(--figma-spacing-125) px-(--figma-spacing-200) cursor-pointer border-1 border-solid border-transparent" :class="{ 'active-class': mode.active }">{{ mode.name }}</button>
            </template>
      </div>
</div>
</template> 

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
import { ref } from 'vue';

const state = useStateStore();

const setActiveMode = (modeName: string) => {
      state.appModes.forEach(mode => {
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
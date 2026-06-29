<template>
 <div class="p-(--figma-spacing-250) flex items-center justify-between">
     <div>
        <select>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>  
            <option value="Vue">Vue</option>
            <option value="Java">Java</option>    
        </select>
        <input type="checkbox" id="hideMastered" />
        <label for="hideMastered" class="ml-(--figma-spacing-150) text-preset-4">Hide Mastered</label>
    </div>
    <button class="ml-4 flex cursor-pointer text-preset-4 px-(--figma-spacing-200) py-(--figma-spacing-150) rounded-(--figma-radius-full) border border-(--color-figma-neutral-900) hover:bg-(--color-figma-neutral-100)">
         <img
            class="hidden sm:block mr-(--figma-spacing-100)"
            src="../../assets/images/icon-shuffle.svg"
            alt="Logo"
        />
        Shuffle
    </button>
 </div>
</template> 

<script setup lang="ts">

</script>

<style scoped>

</style>


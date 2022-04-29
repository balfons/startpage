<script setup lang="ts">

</script>

<template>
  <footer class="dock-nav">
    <slot/>
  </footer>
</template>

<style scoped>

.dock-nav {
  @apply
    flex 
    bg-white
    gap-2
    mx-3
    overflow-auto
    dark:bg-neutral-800
    p-3
    flex-row
    rounded-lg
    ring-1
    dark:ring-neutral-700
    ring-neutral-900/5
    shadow-md
}

</style>

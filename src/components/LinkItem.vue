<script setup lang="ts">

defineProps<{
  title: string;
  subtitle: string;
  url: string;
}>()

</script>

<template>
  <div class="link-item">
    <a class="text-neutral-500 dark:text-neutral-400" :href="url">{{title}}</a>
  </div>
</template>

<style scoped>

</style>

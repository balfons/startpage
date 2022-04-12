<script setup lang="ts">

defineProps<{
  title: string;
  subtitle: string;
  url: string;
}>()

</script>

<template>
  <div class="link-item">
    <a class="text-neutral-500 dark:text-neutral-400 block leading-4 hover:underline hover:text-neutral-700 dark:hover:text-neutral-200" :href="url">
      <span class="block mb-0 font-semibold">{{title}}</span>
      <span class="text-sm">{{subtitle}}</span>
    </a>
  </div>
</template>

<style scoped>

</style>

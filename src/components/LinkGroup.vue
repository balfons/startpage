<script setup lang="ts">
import { ILinkGroup } from '../models/links.interface';
import LinkItem from './LinkItem.vue';

defineProps<{
  linkGroup: ILinkGroup,
}>()

</script>

<template>
  <section class="link-group bg-white dark:bg-black ring-1 ring-neutral-900/5 shadow-lg rounded-md">
    <div class="px-6 py-3 bg-neutral-000 border-b dark:border-neutral-900 border-neutral-100 font-bold text-neutral-600 dark:text-neutral-300">
      {{linkGroup.title}}
    </div>
    <div class="px-6 py-6">
      <LinkItem v-for="link in linkGroup.links" :key="link.title" :title="link.title" :subtitle="link.subtitle" :url="link.url" />
    </div>
  </section>
</template>

<style scoped>

</style>

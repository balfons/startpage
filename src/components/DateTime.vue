<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
let dateNow = ref(new Date());
let dateInterval: number = 0;

onMounted(() => {
  dateInterval = window.setInterval(() => {
    dateNow.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(dateInterval);
});

const time = computed(() => {
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeStyle: 'medium'
  }

  return new Intl.DateTimeFormat('default', timeOptions).format(dateNow.value)
})

const date = computed(() => {
  const timeOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }

  return new Intl.DateTimeFormat('default', timeOptions).format(dateNow.value)
})


</script>

<template>
  <div class="date-time text-center">
    <div class="inline-flex flex-col font-mono">
      <p class="text-l text-center font-semibold text-neutral-900/50 dark:text-neutral-100/50">{{ date }}</p>
      <p class="text-3xl font-bold text-neutral-900 dark:text-neutral-100">{{ time }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>

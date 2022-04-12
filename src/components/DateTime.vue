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
    timeStyle: 'short'
  }

  return new Intl.DateTimeFormat('default', timeOptions).format(dateNow.value)
})

const date = computed(() => {
  const timeOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  }

  return new Intl.DateTimeFormat('default', timeOptions).format(dateNow.value)
})


</script>

<template>
  <div class="date-time text-center">
    <p class="text-4xl font-bold text-neutral-900 dark:text-neutral-100">{{ time }}</p>
    <p class="text-xl font-normal text-neutral-900 dark:text-neutral-100">{{ date }}</p>
  </div>
</template>

<style scoped>
</style>

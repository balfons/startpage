<script setup lang="ts">

defineProps<{
  selected?: boolean,
}>()

const emit = defineEmits<{
  (e: 'onClick', value: Event): void,
}>()
</script>

<template>
  <button 
    @click="emit('onClick', $event)"
    :class="{ selected: selected }"
    class="button">
    <slot />
  </button>
</template>

<style scoped>

.button {
  @apply 
    bg-neutral-100
    text-neutral-600
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    font-semibold
    h-12
    px-6
    rounded-lg
    w-full
    flex
    items-center
    justify-center
    sm:w-auto
    dark:bg-neutral-900
    dark:hover:bg-neutral-700
    dark:text-neutral-300
    whitespace-nowrap
}

.selected {
  @apply
  ring-neutral-400
  ring-offset-neutral-50

  dark:ring-neutral-600
  dark:ring-offset-neutral-800
  ring-2
  ring-offset-2
}
</style>

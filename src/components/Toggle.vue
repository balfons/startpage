<script setup lang="ts">
defineProps<{
  modelValue: boolean,
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void,
}>()

const onInputChange = (event: Event) => {
  emit('update:modelValue', (<HTMLInputElement>event.target).checked);
}

</script>

<template>
  <div class="toggle inline-flex items-center">
    <input :checked="modelValue" @input="onInputChange($event)" type="checkbox" id="switch" />
    <label for="switch"></label>
  </div>
</template>

<style scoped>
input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
  @apply block relative cursor-pointer w-14 h-7 rounded-full bg-neutral-900 dark:bg-neutral-100;
	text-indent: -9999px;
}

label:after {
	@apply absolute cursor-pointer w-5 h-5 top-1 left-1 rounded-full dark:bg-neutral-900 bg-neutral-100 content-[''];
	transition: 0.3s;
}

input:checked + label {
	@apply bg-neutral-900 dark:bg-neutral-100;
}

input:checked + label:after {
	left: calc(100% - theme(spacing.1));
	transform: translateX(-100%);
}

label:active:after {
	@apply w-7;
}
</style>

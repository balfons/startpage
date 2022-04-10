<script setup lang="ts">
import Button from './Button.vue';
import { ref } from 'vue';
import { useLinkStore } from '../stores/link.store';
// import Button from './Button.vue';

const jsonUpload = ref<HTMLInputElement | null>(null)
const linkStore = useLinkStore()

const selectFile = (): void => {
  jsonUpload.value?.click()
}

// const handleFile = async (event: Event & { target: { files: Array<Blob> }}): Promise<void> =>{
const handleFile = async (event: Event): Promise<void> =>{
  try {
    const file = (event.target as HTMLInputElement)?.files?.[0]
    if (!file) {
      return
    }

    const fileReader = new FileReader()

    let name: string | null = null

    while (true) {
      name = await prompt('Enter name of link page')

      if (name && !linkStore.linkPageExists(name)) {
        break
      }
    }

    fileReader.onload = (event) => saveLinkPage(event, String(name))
    fileReader.readAsText(file)
  } catch (error) {
    console.error('could not read file')
  }
}

const saveLinkPage = (event: ProgressEvent<FileReader>, name: string): void => {
  const jsonFile = JSON.parse(String(event.target?.result))
  linkStore.addLinkPage(name, jsonFile)
  linkStore.setSelectedLinkPageName(name)
}

</script>

<template>
  <Button @onClick="selectFile">
    <slot/>
    <input
      @change="handleFile"
      ref="jsonUpload"
      id="jsonUpload"
      type="file"
      accept="application/json"
      hidden
    />
  </Button>
</template>

<style scoped>

</style>

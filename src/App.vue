<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import DateTime from './components/DateTime.vue';
import Toggle from './components/Toggle.vue';
import LinkGroup from './components/LinkGroup.vue';
import MagicGrid from "magic-grid"
import DockNav from './components/DockNav.vue';
import Button from './components/Button.vue';
import UploadButton from './components/UploadButton.vue';
import { useLinkStore } from './stores/link.store';

const isDarkMode = ref(false);

let magicGrid: MagicGrid | null = null;

const linkStore = useLinkStore();


const createMagicGrid = (items: number, maxColumns: number): void => {
    magicGrid = new MagicGrid({
      container: '#links',
      items,
      animate: true,
      static: false,
      maxColumns,
      gutter: 0,
      useMin: true
    })

    magicGrid.listen()
  }

onMounted(() => {
  createMagicGrid(selectedLinkPage.value.length, 4)
});

const selectedLinkPage = computed(() => {
  return linkStore.selectedLinkPage;
});

const activeLinkPageName = computed(() => {
  return linkStore.activeLinkPageName;
});

watch(selectedLinkPage, (selectedLinkPage) => {
  nextTick(() => createMagicGrid(selectedLinkPage.length, 4))
})

const changeSelectedLinkPage = (linkPageName: string) => {
  linkStore.setSelectedLinkPageName(linkPageName);
};


const toggleDarkMode = (darkMode: boolean) => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
</script>

<template>
  <div class="bg-neutral-100 dark:bg-neutral-900 h-screen flex flex-col overflow-auto">
    <div class="py-6">
      <DateTime />
    </div>
    
    <div class="absolute top-3 right-3">
      <Toggle v-model="isDarkMode" @update:model-value="toggleDarkMode" />
    </div>

    <div id="links" class="flex max-w-7xl mx-auto w-screen flex-grow">
      <div v-for="group in selectedLinkPage" :key="group.title" class="p-3 w-1/4">
        <LinkGroup  :linkGroup="group" />
      </div>
    </div>


    <div class="absolute bottom-3 translate-x-1/2 right-1/2 max-w-7xl max-w-screen">
      <DockNav>
        <template v-slot>
          <UploadButton>+</UploadButton>
          <Button 
            v-for="linkPageName in linkStore.linkPageNames"
            :selected="linkPageName === activeLinkPageName" 
            @onClick="changeSelectedLinkPage(linkPageName)">{{linkPageName}}</Button>
        </template>
      </DockNav>
    </div>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

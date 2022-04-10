import { defineStore } from "pinia";

export interface ILink {
  title: string;
  subtitle: string;
  url: string;
}

export interface ILinkGroup {
  title: string;
  links: Array<ILink>;
}

interface LinkPages {
  [name: string]: Array<ILinkGroup>;
}

interface LinkState {
  linkPages: LinkPages;
  selectedLinkPageName: string;
}

export const useLinkStore = defineStore('link', {
  state: () => ({
    linkPages: {},
    selectedLinkPageName: ''
  } as LinkState),
  getters: {
    selectedLinkPage (): Array<ILinkGroup> {
      return this.linkPages[this.selectedLinkPageName] ?? []
    },
    activeLinkPageName: (state: LinkState): string => {
      return state.selectedLinkPageName;
    },
    linkPageNames: (state: LinkState): Array<string> => {
      return Object.keys(state.linkPages).map(name => name)
    },
    linkPageExists (): (linkPageName: string) => boolean {
      return (linkPageName: string) => {
        return !!this.linkPages[linkPageName]
      }
    }
  },
  actions: {
    setLinkPages(linkPages: LinkPages) {
      this.linkPages = linkPages;
    },
    setSelectedLinkPageName(selectedLinkPageName: string) {
      this.selectedLinkPageName = selectedLinkPageName;
    },
    addLinkPage(name: string, data: Array<ILinkGroup>) {
      const links = {
        ...this.linkPages,
        ...{ [name]: data }
      }
  
      this.setLinkPages(links);
    },
  },
  persist: true,
});
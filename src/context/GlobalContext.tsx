import { createContext } from "react";

export interface collection {
  id: number, 
  name: string, 
  link: string, 
  color: string,
  icon: React.ReactNode,
  favorite: boolean,
  tasks: {
    id: number,
    name: string,
    isCompleted: boolean
  }[]
}

interface GlobalContent {
  collections: collection[],
  setCollections: (params: collection[]) => void,
  isOpenSidebar: boolean,
  setIsOpenSidebar: (params: boolean) => void,
}

export const GlobalContext = createContext<GlobalContent>({
  collections: [],
  setCollections: () => {},
  isOpenSidebar: true,
  setIsOpenSidebar: () => {},
});
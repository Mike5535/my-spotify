//store.ts//
import { createContext, useContext } from "react";
import musicStore from "./stores/MusicStore";

const store = {
    musicStore: musicStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;
import { GenreObj } from "@/types/Genre";
import { Ajax } from "@/utils/ajax";
import { makeAutoObservable } from "mobx";

class musicStore {
    
    genres: GenreObj[] = [];
  
    constructor() {
      makeAutoObservable(this);
    }

    getGenres() {
        Ajax.get<GenreObj[]>('/api/v1/genres').then((res) => {
            this.genres = res.body;
        });
    }
  }

export default musicStore;
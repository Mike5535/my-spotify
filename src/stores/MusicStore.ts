import { GenreObj } from "@/types/Genre";
import { Ajax } from "@/utils/ajax";
import { makeAutoObservable } from "mobx";

// class musicStore {

//     genres: GenreObj[] = [];

//     constructor() {
//       makeAutoObservable(this);
//     }

//     get getGenres() {
//       return this.genres;
//     }

//     set setGenres(newGenres) {
//       this.genres = newGenres;
//     }

//     async fetchGenres() {
//       console.log('fetch')
//       const body = (await Ajax.get<GenreObj[]>('/api/v1/genres')).body
//       this.setGenres(body);
//       console.log(this.genres)
//     }
//   }
function musicStore(genres: GenreObj[] = []) {
  return makeAutoObservable({
    genres,
    get curGenres():GenreObj[] {
      return this.genres;
    },
    async fetchGenres() {
      console.log('fetch')
      const body = (await Ajax.get<GenreObj[]>('/api/v1/genres')).body;
      this.genres = body;
     // console.log(this.genres[0].name)
    }
  })
}

export default musicStore;
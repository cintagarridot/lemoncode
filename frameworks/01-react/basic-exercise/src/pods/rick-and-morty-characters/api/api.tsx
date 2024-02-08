import { Character } from "./api.model";

export const getCharacters = (): Promise<Character[]> => {
  return fetch(`https://rickandmortyapi.com/api/character`)
  .then((response) => response.json())
  .then((json) => json.results);
}

export const getCharacterDetails = (id: number): Promise<Character> => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
}
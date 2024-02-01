import { CharacterEntity } from "../rick-and-morty-characters.vm";

export const getCharacters = (): Promise<CharacterEntity[]> => {
  return fetch(`https://rickandmortyapi.com/api/character`)
  .then((response) => response.json())
  .then((json) => json.results);
}

export const getCharacterDetails = (id: string): Promise<CharacterEntity> => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
}
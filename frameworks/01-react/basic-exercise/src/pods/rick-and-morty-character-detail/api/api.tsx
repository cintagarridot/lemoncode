import { CharacterEntity } from "../rick-and-morty-character-detail.vm";

export const getCharacterDetails = (id: string): Promise<CharacterEntity> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json());
}
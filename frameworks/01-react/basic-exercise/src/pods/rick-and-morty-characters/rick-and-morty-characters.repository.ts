import * as api from "./api/api";
import { mapCharactersFromApiToViewModel } from "./rick-and-morty-characters.mappers";
import * as viewModel from "./rick-and-morty-characters.vm";

export const getCharacters = (): Promise<viewModel.CharacterEntity[]> => {
  return api.getCharacters().then(mapCharactersFromApiToViewModel);
};

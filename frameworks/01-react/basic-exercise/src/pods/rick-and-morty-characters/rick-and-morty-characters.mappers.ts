import * as apiModel from "./api/api.model";
import * as viewModel from "./rick-and-morty-characters.vm";

export const mapCharactersFromApiToViewModel = (data: apiModel.Character[]): viewModel.CharacterEntity[] =>
  data.map((item) => mapCharacterToVM(item));

const mapCharacterToVM = (data: apiModel.Character): viewModel.CharacterEntity => ({
  id: data.id,
  name: data.name,
  image: data.image,
});


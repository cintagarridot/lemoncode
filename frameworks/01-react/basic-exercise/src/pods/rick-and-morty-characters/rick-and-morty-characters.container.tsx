import React, { useState } from "react";
import { CharactersContext } from "../../core/characters/characters.context";
import { CharacterEntity } from "./rick-and-morty-characters.vm";
import { Constants } from "./rick-and-morty-characters.constants";
import { RickAndMortyCharactersList } from "./rick-and-morty-characters.component";
import { getCharacterDetails, getCharacters } from "./api/api";

export const RickAndMortyListPage: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const  {character, setCharacter } = React.useContext(CharactersContext);
  const [page, setPage] = useState<number>(1);
  const [noOfPages, setNoOfPages] = useState<number>();
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const fetchApi = () => {
    getCharacters().then((data) => {
      setCharacters(data)
      setNoOfPages(Math.ceil(data.length / Constants.PER_PAGE));
    })
  }

  React.useEffect(() => {
    fetchApi();
  }, []);

  const handleOnChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter(event.target.value);
  };

  const handleSearch = () => {
    const found = characters.find((ch) => ch.name === character);
    if (!found) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
      getCharacterDetails(found.id)
      .then((data) => {
        setCharacters([data])
      });
  };

  const handleChange = (_event, value) => {
    setPage(value);
  };

  return <RickAndMortyCharactersList
    showAlert={showAlert}
    characters={characters}
    character={character}
    handleOnChangeInputValue={handleOnChangeInputValue}
    handleSearch={handleSearch}
    noOfPages={noOfPages}
    page={page}
    handleChange={handleChange}
  />
};

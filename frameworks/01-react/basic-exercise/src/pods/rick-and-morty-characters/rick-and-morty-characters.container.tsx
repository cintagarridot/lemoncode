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

  const getCharacterIDFromCharacterName = (charactersData: CharacterEntity[]) => {
    return charactersData.find((ch) => ch.name === character);
  };

  const fetchApi = (clearFilterChar: boolean = false) => {
      getCharacters().then((charactersArray) => {
        if (character && !clearFilterChar) {
          const found = getCharacterIDFromCharacterName(charactersArray);
          getCharacterDetails(found.id)
          .then((characterData) => {
            setCharacters([characterData])
          });
          return;
        } 
        setCharacters(charactersArray)
        setNoOfPages(Math.ceil(charactersArray.length / Constants.PER_PAGE));
    });    
  }

  React.useEffect(() => {
    fetchApi();
  }, []);

  const handleClearFilter = () => {
    setCharacter('');
    fetchApi(true);
  }

  const handleOnChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === '') {
      handleClearFilter();
      return;
    }
    setCharacter(value);
  };

  const handleSearch = () => {
    const found = getCharacterIDFromCharacterName(characters);
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
    handleClearFilter={handleClearFilter}
  />
};

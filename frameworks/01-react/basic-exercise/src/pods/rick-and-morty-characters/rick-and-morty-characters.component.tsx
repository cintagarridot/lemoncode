import React, { useState } from "react";
import Pagination from '@mui/material/Pagination';
import { Link } from "react-router-dom";
import { alertMessageCharacters, avatarTitle, idTitle, listRickAndMortyPageTitle, nameTitle, searchButton, searchLabel, organizationListLink } from "../../constants";
import { Alert } from "@mui/material";
import { CharactersContext } from "../../core/characters/characters.context";
import { Constants } from "./rick-and-morty-characters.constants";
import { CharacterEntity } from "./rick-and-morty-characters.vm";

interface Props {
  showAlert: boolean,
  characters: CharacterEntity[],
  character: string,
  handleOnChangeInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleSearch: () => void,
  noOfPages: number,
  page: number,
  handleChange: (event, value) => void,
}

export const RickAndMortyCharactersList: React.FC<Props> = ({
  showAlert,
  characters,
  character,
  handleOnChangeInputValue,
  handleSearch,
  noOfPages,
  page,
  handleChange,
}) => (
    <>
      <h2>{listRickAndMortyPageTitle}</h2>+{" "}
      <Link to="/list">{organizationListLink}</Link>
      <div className="searchBar">
        <h3>{searchLabel}</h3>
        <input placeholder={Constants.enterNamePlaceholder} value={character} onChange={handleOnChangeInputValue} type="search" className="inputSearch" />
        <button onClick={handleSearch}>{searchButton}</button>
      </div>
      {showAlert && (<Alert severity="error">
        {alertMessageCharacters}
      </Alert>)}
      <div className="mt-1 list-user-list-container">
        <span className="list-header">{avatarTitle}</span>
        <span className="list-header">{idTitle}</span>
        <span className="list-header">{nameTitle}</span>
        {characters
        .slice((page - 1) * Constants.PER_PAGE, page * Constants.PER_PAGE)
        .map((character) => (
          <>
            <img src={character.image} />
            <span>{character.id}</span>
            <Link to={`/detail/character/${character.id}`}>{character.name}</Link>
          </>
        ))}
      </div>
      <Pagination
        count={noOfPages}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </>
  );

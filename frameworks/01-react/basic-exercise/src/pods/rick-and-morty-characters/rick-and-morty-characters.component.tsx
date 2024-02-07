import React from "react";
import Pagination from '@mui/material/Pagination';
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";
import { Constants } from "./rick-and-morty-characters.constants";
import { CharacterEntity } from "./rick-and-morty-characters.vm";
import './rick-and-morty-characters.css';

interface Props {
  showAlert: boolean,
  characters: CharacterEntity[],
  character: string,
  handleOnChangeInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleSearch: () => void,
  noOfPages: number,
  page: number,
  handleChange: (event, value) => void,
  handleClearFilter: () => void,
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
  handleClearFilter,
}) => (
    <>
      <h2>{Constants.listRickAndMortyPageTitle}</h2>+{" "}
      <Link to="/list">{Constants.organizationListLink}</Link>
      <div className="searchBar">
        <h3>{Constants.searchLabel}</h3>
        <input placeholder={Constants.enterNamePlaceholder} value={character} onChange={handleOnChangeInputValue} type="search" className="inputSearch" />
        <div className="buttons">
          <button onClick={handleSearch}>{Constants.searchButton}</button>
          <button onClick={handleClearFilter}>{Constants.clearFilter}</button>
        </div>
        
      </div>
      {showAlert && (<Alert severity="error">
        {Constants.alertMessageCharacters}
      </Alert>)}
      <div className="mt-1 list-user-list-container">
        <span className="list-header">{Constants.avatarTitle}</span>
        <span className="list-header">{Constants.idTitle}</span>
        <span className="list-header">{Constants.nameTitle}</span>
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
      <div className="paginationDiv">
        <Pagination
          count={noOfPages}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
      
    </>
  );

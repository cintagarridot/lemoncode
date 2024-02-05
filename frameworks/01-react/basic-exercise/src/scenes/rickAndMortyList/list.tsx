import React, { useState } from "react";
import Pagination from '@mui/material/Pagination';
import { Link } from "react-router-dom";
import { alertMessageCharacters, avatarTitle, idTitle, listRickAndMortyPageTitle, nameTitle, searchButton, searchLabel, organizationListLink } from "../../constants";
import { RickAndMortyContext } from "../../contexts/rickAndMortyContext";
import { Alert } from "@mui/material";

interface CharacterEntity {
  id: string;
  name: string;
  image: string;
}

const PER_PAGE = 5;

export const RickAndMortyList: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const  {character, setCharacter } = React.useContext(RickAndMortyContext);
  const [page, setPage] = useState<number>(1);
  const [noOfPages, setNoOfPages] = useState<number>();
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const fetchApi = () => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => response.json())
      .then((json) => {
        setCharacters(json.results)
        setNoOfPages(Math.ceil(json.length / PER_PAGE));
      });
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
      fetch(`https://rickandmortyapi.com/api/character/${found.id}`)
      .then((response) => response.json())
      .then((json) => {
        setCharacters([json])
        setNoOfPages(Math.ceil(json.length / PER_PAGE));
      });
  };

  const handleChange = (_event, value) => {
    setPage(value);
  };

  return (
    <>
      <h2>{listRickAndMortyPageTitle}</h2>+{" "}
      <Link to="/list">{organizationListLink}</Link>
      <div className="searchBar">
        <h3>{searchLabel}</h3>
        <input placeholder="Enter a character name" value={character} onChange={handleOnChangeInputValue} type="search" className="inputSearch" />
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
        .slice((page - 1) * PER_PAGE, page * PER_PAGE)
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
};

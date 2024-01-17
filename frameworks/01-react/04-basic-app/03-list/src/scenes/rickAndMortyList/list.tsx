import React, { useState } from "react";
import Pagination from '@material-ui/lab/Pagination';
import { Link } from "react-router-dom";
import { avatarTitle, idTitle, listRickAndMortyPageTitle, nameTitle, searchButton, searchLabel } from "../constants";
import { RickAndMortyContext } from "../../contexts/rickAndMortyContext";

interface CharacterEntity {
  id: string;
  name: string;
  image: string;
}

const PER_PAGE = 5;

export const RickAndMortyList: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const  {character, setCharacter } = React.useContext(RickAndMortyContext);
  const [characterId, setCharacterId] = React.useState<string>();
  const [page, setPage] = useState<number>(1);
  const [noOfPages, setNoOfPages] = useState<number>();

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

  const handleOnClick = () => {
    debugger;
    const { id } = characters.find((ch) => ch.name === character);
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
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
      <div className="searchBar">
        <h3>{searchLabel}</h3>
        <input placeholder="Enter a character name" value={character} onChange={handleOnChangeInputValue} type="search" className="inputSearch" />
        <button onClick={handleOnClick}>{searchButton}</button>
      </div>
      <div className="list-user-list-container">
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

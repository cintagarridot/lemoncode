import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { backToListPage, characterName, numberOfEpisodes, titleDetails, userId } from "../constants";

import './detail.css';

interface CharacterEntity {
  id: string;
  name: string;
  image: string;
  episode: string[];
}

export const DetailPage: React.FC = () => {
  const {id, type} = useParams();
  const [characterData, setCharacterData] = useState<CharacterEntity>();

  useEffect(() => {
    if (type === 'character') {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((json) => {
          setCharacterData(json)
        });
    } 
  }, []);

  return (
    <div>
      <div className="titleAndImage">
        <div>
        <h2>{titleDetails}</h2>
        <h3>{userId} {id}</h3>
        {type === 'character' && (
          <>
            <h3>{characterName} {characterData?.name}</h3>
            <h4>{numberOfEpisodes} {characterData?.episode.length + 1}</h4>
          </>
        )}
        </div>
        {type === 'character' && (
          <img title="Character Image" className="image" src={characterData?.image} />
        )}
      </div>
      <Link to={type === 'member' ? '/list' : '/rick-and-morty/list'}>{backToListPage}</Link>
    </div>
  );
};

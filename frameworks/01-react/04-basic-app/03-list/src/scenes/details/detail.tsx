import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { backToListPage, characterName, numberOfEpisodes, titleDetails, userId } from "../constants";
import { OrganizationContext } from "../../contexts/organizationContext";

import './detail.css';

interface CharacterEntity {
  id: string;
  name: string;
  image: string;
  episode: string[];
}

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const DetailPage: React.FC = () => {
  const {id, type} = useParams();
  const [data, setData] = useState<CharacterEntity | MemberEntity>();
  const { organization } = useContext(OrganizationContext);

  useEffect(() => {
    if (type === 'character') {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((json) => {
          setData(json)
        });
    } else {
      fetch(`https://api.github.com/orgs/${organization}/members/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      });
    }
  }, []);

  return (
    <div>
      <div className="titleAndImage">
        <div>
        <h2>{titleDetails}</h2>
        <h3>{userId} {id}</h3>
        <h3>{characterName} {type === 'member' ? (data as MemberEntity)?.login : (data as CharacterEntity)?.name}</h3>
        {type === 'character' && (
          <h4>{numberOfEpisodes} {(data as CharacterEntity)?.episode.length + 1}</h4>
        )}
        </div>
        <img title="Character Image" className="image" src={type === 'member' ? (data as MemberEntity)?.avatar_url : (data as CharacterEntity)?.image} />
      </div>
      <Link to={type === 'member' ? '/list' : '/rick-and-morty/list'}>{backToListPage}</Link>
    </div>
  );
};

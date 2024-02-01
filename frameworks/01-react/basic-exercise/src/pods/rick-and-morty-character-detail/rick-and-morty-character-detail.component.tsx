import React from "react";
import { Link } from "react-router-dom";

import './rick-and-morty-character-detail.styles.css'
import { Constants } from "./rick-and-morty-character-detail.constants";
import { CharacterEntity } from "./rick-and-morty-character-detail.vm";

interface Props {
    characterData: CharacterEntity,
    id: string,
}

export const CharacterDetails: React.FC<Props> = ({
    characterData, id
}) => {
  console.log('characterData', characterData)
  return (
    <div>
      <div className="titleAndImage">
        <div>
            <h2>{Constants.titleDetails}</h2>
            <h3>{Constants.userId} {id}</h3>
            <h3>{Constants.characterName} {characterData?.name}</h3>
            <h4>{Constants.numberOfEpisodes} {characterData?.episode?.length + 1}</h4>
        </div>
        <img title={Constants.characterImageTitle} className="image" src={characterData?.image} />
      </div>
      <Link to='/rick-and-morty/list'>{Constants.backToListPage}</Link>
    </div>
  );
};

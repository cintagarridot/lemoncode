import React from "react";
import { Link } from "react-router-dom";

import { Constants } from "./rick-and-morty-character-detail.constants";
import { CharacterEntity } from "./rick-and-morty-character-detail.vm";
import './rick-and-morty-character-detail.styles.css';

interface Props {
    characterData: CharacterEntity,
    id: string,
}

export const CharacterDetails: React.FC<Props> = ({
    characterData, id
}) => {
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
      <Link className="link" to='/rick-and-morty/list'>{Constants.backToListPage}</Link>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './rick-and-morty-character-detail.styles.css'
import { getCharacterDetails } from "./api/api";
import { CharacterEntity } from "./rick-and-morty-character-detail.vm";
import { CharacterDetails } from "./rick-and-morty-character-detail.component";

export const CharacterDetailPage: React.FC = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState<CharacterEntity>();

  useEffect(() => {
    getCharacterDetails(id).then(setCharacterData);
  }, []);

  return <CharacterDetails characterData={characterData} id={id} />
};

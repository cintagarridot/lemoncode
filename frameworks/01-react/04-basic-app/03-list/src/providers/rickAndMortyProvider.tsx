import React from 'react';
import { RickAndMortyContext } from '../contexts/rickAndMortyContext';

interface Props {
    children: React.ReactNode;
}

export const RickAndMortyProvider: React.FC<Props> = (props) => {
    const [character, setCharacter] = React.useState<string>('')

    return (
        <RickAndMortyContext.Provider value={{ character, setCharacter}}>
            {props.children}
        </RickAndMortyContext.Provider>
    )
}


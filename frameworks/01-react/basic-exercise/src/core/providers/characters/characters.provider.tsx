import React from 'react';
import { CharactersContext } from './characters.context';

interface Props {
    children: React.ReactNode;
}

export const CharactersProvider: React.FC<Props> = (props) => {
    const [character, setCharacter] = React.useState<string>('')

    return (
        <CharactersContext.Provider value={{ character, setCharacter}}>
            {props.children}
        </CharactersContext.Provider>
    )
}


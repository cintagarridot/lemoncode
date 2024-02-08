import { createContext } from 'react';

interface ContextModel {
    character: string;
    setCharacter: (org: string) => void;
}

export const CharactersContext = createContext<ContextModel>(null);
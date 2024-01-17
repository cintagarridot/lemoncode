import { createContext } from 'react';

interface ContextModel {
    character: string;
    setCharacter: (org: string) => void;
}

export const RickAndMortyContext = createContext<ContextModel>(null);
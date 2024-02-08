import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CharactersProvider } from "./core/providers/characters/characters.provider";
import { OrganizationProvider } from "./core/providers/organizations/organizations.provider";
import { 
  LoginScene, RickAndMortyCharacterDetailsScene, RickAndMortyCharactersListScene,
  GithubMembersScene, GithubMemberDetailScene,
} from "./scenes";

export const App = () => {
  return (
    <Router>
      <OrganizationProvider>
        <CharactersProvider>
          <Routes>
            <Route path="/" element={<LoginScene />} />
            <Route path="/list" element={<GithubMembersScene />} />
            <Route path="/detail/member/:id" element={<GithubMemberDetailScene />} />
            <Route path="/detail/character/:id" element={<RickAndMortyCharacterDetailsScene />} />
            <Route path="/rick-and-morty/list" element={<RickAndMortyCharactersListScene />} />
          </Routes>
        </CharactersProvider>
      </OrganizationProvider>
    </Router>
  );
};

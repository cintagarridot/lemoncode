import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./scenes/login/login";
import { ListPage } from "./scenes/organizationList/list";
import { DetailPage } from "./scenes/details/detail";
import { OrganizationProvider } from "./providers/organizationProvider";
import { RickAndMortyList } from "./scenes/rickAndMortyList/list";
import { RickAndMortyProvider } from "./providers/rickAndMortyProvider";

export const App = () => {
  return (
    <Router>
      <OrganizationProvider>
        <RickAndMortyProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/detail/:type/:id" element={<DetailPage />} />
            <Route path="/rick-and-morty/list" element={<RickAndMortyList />} />
          </Routes>
        </RickAndMortyProvider>
      </OrganizationProvider>
    </Router>
  );
};

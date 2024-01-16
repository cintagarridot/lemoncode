import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./scenes/login/login";
import { ListPage } from "./scenes/list/list";
import { DetailPage } from "./scenes/details/detail";
import { OrganizationProvider } from "./providers/organizationProvider";

export const App = () => {
  return (
    <Router>
      <OrganizationProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
      </OrganizationProvider>
    </Router>
  );
};

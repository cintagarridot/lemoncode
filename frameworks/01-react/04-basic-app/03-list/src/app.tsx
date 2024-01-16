import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
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

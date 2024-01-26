import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListPage } from "./scenes/list";

export const App = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<ListPage />} />
          </Routes>
    </Router>
  );
};

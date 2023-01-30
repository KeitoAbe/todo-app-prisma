import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import RamenContents from "./RamenContents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path={`:id`} element={<RamenContents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

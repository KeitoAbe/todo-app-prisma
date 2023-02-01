import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import RamenContents from "./RamenContents";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path={`:id`} element={<RamenContents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

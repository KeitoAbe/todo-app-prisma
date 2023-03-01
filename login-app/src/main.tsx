import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Sub from "./Sub";
import Login from "./Login";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<App />} />
        <Route path={`/sub`} element={<Sub />} />
        <Route path={`/login`} element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

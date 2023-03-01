import React from "react";
import ReactDOM from "react-dom/client";
import Auth from "./Auth";
import MainPage from "./MainPage";
import SubPage from "./SubPage";
import Login from "./Login";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Auth />}>
          <Route index element={<MainPage />} />
          <Route path={`/sub`} element={<SubPage />} />
        </Route>
        <Route path={`/login`} element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

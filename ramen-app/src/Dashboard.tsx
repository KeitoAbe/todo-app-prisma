import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function Dashboard() {
  return (
    <div>
      <header>
        <h1>ラーメン屋アプリ</h1>
      </header>
      <div className="ramenContainer">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}

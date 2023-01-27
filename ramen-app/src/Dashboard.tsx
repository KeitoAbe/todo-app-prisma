import React from "react";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <h1>ラーメン屋アプリ</h1>
      </header>
      <Outlet />
    </div>
  );
}

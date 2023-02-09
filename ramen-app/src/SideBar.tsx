import React from "react";
import useSWR from "swr";
import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

function GetRamenList() {
  const fetcher = (url: string): Promise<any> =>
    fetch(url).then((res) => res.json());
  return useSWR(`https://ramen-api.dev/shops`, fetcher);
}

function SideBar() {
  const { data, error, isLoading } = GetRamenList();
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="ramenList">
      {data.shops.map((shop: any) => {
        return (
          <ListItem key={shop.id}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to={shop.id}
            >
              <ListItemButton>
                <ListItemText
                  primary={shop.name}
                  primaryTypographyProps={{
                    color: "primary",
                    fontWeight: "medium",
                  }}
                />
              </ListItemButton>
            </NavLink>
          </ListItem>
        );
      })}
    </div>
  );
}

export default SideBar;

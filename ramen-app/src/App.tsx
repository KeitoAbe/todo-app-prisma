import React from "react";
import useSWR from "swr";
import { Link } from "react-router-dom";

function GetRamenList() {
  const fetcher = (url: string): Promise<any> =>
    fetch(url).then((res) => res.json());
  return useSWR(
    `https://ramen-api.dev/shops?pretty&page=1&perPage=100`,
    fetcher
  );
}

function App() {
  const { data, error, isLoading } = GetRamenList();
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <h1>ラーメン屋 アプリ</h1>
      <ul>
        {data.shops.map((shop: any) => {
          return (
            <li key={shop.id}>
              <Link to={shop.id}>{shop.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

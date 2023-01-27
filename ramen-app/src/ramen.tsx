import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

function useRamen() {
  const id = useParams();
  const fetcher = (url: string): Promise<any> =>
    fetch(url).then((res) => res.json());
  return useSWR(`https://ramen-api.dev/shops/${id.id}`, fetcher);
}

export default function Ramen() {
  const { data, error, isLoading } = useRamen();
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <h1>{data.shop.name}</h1>
      <img src={data.shop.photos[0].url} alt={data.shop.name} width="500px" />
    </div>
  );
}

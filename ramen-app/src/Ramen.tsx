import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import RamenContents from "./components/Ramen/RamenContents";

function useRamen() {
  const { id } = useParams();
  const fetcher = (url: string): Promise<any> =>
    fetch(url).then((res) => res.json());
  return useSWR(`https://ramen-api.dev/shops/${id}`, fetcher);
}

export default function Ramen() {
  const { data, error, isLoading } = useRamen();
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <RamenContents
      shopName={data.shop.name}
      photoUrl={data.shop.photos[0].url}
    />
  );
}

/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url: string): Promise<any> =>
    fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://ramen-api.dev/shops/yoshimuraya",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <h1>{data.shop.name}</h1>
      <img src={data.shop.photos[0].url} alt={data.shop.name} width="500px" />
    </div>
  );
}

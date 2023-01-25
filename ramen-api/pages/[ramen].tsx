/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

function useRamen() {
  const router = useRouter();
  const id = router.query.ramen;
  const fetcher = (url: string): Promise<any> =>
    fetch(url).then((res) => res.json());
  return useSWR(`https://ramen-api.dev/shops/${id}`, fetcher);
}

export default function Home() {
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

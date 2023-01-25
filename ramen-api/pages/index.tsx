import useSWR from "swr";
import Link from "next/link";

function GetRamenList() {
  const fetcher = (url: string): Promise<any> =>
    fetch(url).then((res) => res.json());
  return useSWR(
    `https://ramen-api.dev/shops?pretty&page=1&perPage=100`,
    fetcher
  );
}

export default function Home() {
  const { data, error, isLoading } = GetRamenList();
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <h1>ラーメン屋 一覧</h1>
      <ul>
        {data.shops.map((shop: any, index: number) => {
          return (
            <li key={shop.id}>
              <Link
                href={{
                  pathname: shop.id,
                }}
              >
                {shop.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

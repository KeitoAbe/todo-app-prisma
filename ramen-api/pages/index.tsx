/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

const searchRamen = async () => {
  const response = await fetch("https://ramen-api.dev/shops/yoshimuraya");
  if (!response.ok) {
    console.error("response.ok:", response.ok);
    console.error("esponse.status:", response.status);
    console.error("esponse.statusText:", response.statusText);
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
};

export default function Home(Ramen: any) {
  if (Ramen.error) {
    return (
      <div>
        <p>通信に失敗しました</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{Ramen.name}</h1>
        <img src={Ramen.img} alt={Ramen.name} width="500px" />
      </div>
    );
  }
}

export const getServerSideProps = async () => {
  try {
    const res = await searchRamen();
    return {
      props: {
        name: res.shop.name,
        img: res.shop.photos[0].url,
        error: false,
      },
    };
  } catch {
    return {
      props: {
        error: true,
      },
    };
  }
};

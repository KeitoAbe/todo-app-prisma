/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

const searchRamen = async () => {
  const response = await fetch("https://ramen-api.dev/shops/yoshimuraya");
  const data = await response.json();
  return data;
};

export default function Home(Ramen: any) {
  return (
    <div>
      <h1>{Ramen.name}</h1>
      <img src={Ramen.img} alt={Ramen.name} width="500px" />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await searchRamen();
  return {
    props: {
      name: res.shop.name,
      img: res.shop.photos[0].url,
    },
  };
};

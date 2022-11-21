import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {(() => {
          const list = [];
          for (let i = 1; i < 64; i++) {
            list.push(
              <img
                src={`/original/img-nagaokamatsuri-${i}.jpg`}
                className={styles.img}
                key={i}
              />
            );
          }
          return <div>{list}</div>;
        })()}
      </div>
    </div>
  );
}

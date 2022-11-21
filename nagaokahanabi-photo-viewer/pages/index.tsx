import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
          <img src="/original/img-nagaokamatsuri-1.jpg" className={styles.img}></img>
          <img src="/original/img-nagaokamatsuri-2.jpg" className={styles.img}></img>
          <img src="/original/img-nagaokamatsuri-3.jpg" className={styles.img}></img>
          <img src="/original/img-nagaokamatsuri-4.jpg" className={styles.img}></img>
          <img src="/original/img-nagaokamatsuri-5.jpg" className={styles.img}></img>
          <img src="/original/img-nagaokamatsuri-6.jpg" className={styles.img}></img>
      </div>
    </div>
  );
}
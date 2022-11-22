import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function Home() {
  const [imgNumber, setImgNumber] = useState(0);

  return (
    <div>
      {imgNumber !== 0 && (
        <div className={styles.imgScaleContainer}>
          <div
            className={styles.closeButton}
            onClick={() => setImgNumber(0)}
          ></div>
          <img
            className={styles.scaleImg}
            src={`/original/img-nagaokamatsuri-${imgNumber}.jpg`}
          />
        </div>
      )}
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
                  onClick={() => setImgNumber(i)}
                />
              );
            }
            return <div>{list}</div>;
          })()}
        </div>
      </div>
    </div>
  );
}

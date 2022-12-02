import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Home() {
  const [imgNumber, setImgNumber] = useState(0);
  return (
    <div>
      <CSSTransition
        classNames={{
          enter: styles.modalEnter,
          enterActive: styles.modalEnterActive,
          exit: styles.modalExit,
          exitActive: styles.modalExitActive,
        }}
        in={imgNumber !== 0}
        timeout={300}
        unmountOnExit
      >
        <div className={styles.imgScaleContainer}>
          <div
            className={styles.closeButton}
            onClick={() => setImgNumber(0)}
          ></div>
          {imgNumber !== 0 && (
            <img
              className={styles.scaleImg}
              src={`/original/img-nagaokamatsuri-${imgNumber}.jpg`}
            />
          )}
        </div>
      </CSSTransition>
      <div
        className={
          imgNumber !== 0
            ? `${styles.container} ${styles.overflowHidden}`
            : styles.container
        }
      >
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

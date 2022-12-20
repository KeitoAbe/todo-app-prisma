import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
export default function Home() {
  const [imgNumber, setImgNumber] = useState(0);
  const [isScroll, setIsScroll] = useState(true);
  return (
    <div
      className={
        isScroll ? styles.wrapper : `${styles.wrapper} ${styles.overflowHidden}`
      }
    >
      <Dialog.Root open={isScroll === false}>
        <Dialog.Portal>
          <Dialog.Content className="DialogContent">
            <div className={styles.imgScaleContainer}>
              <div
                className={styles.closeButton}
                onClick={() => setIsScroll(true)}
              ></div>
              {imgNumber !== 0 && (
                <img
                  className={styles.scaleImg}
                  src={`/original/img-nagaokamatsuri-${imgNumber}.jpg`}
                />
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            {(() => {
              const list = [];
              for (let i = 1; i < 64; i++) {
                list.push(
                  <img
                    src={`/generated/images/thumb/thumb-img-nagaokamatsuri-${i}.jpg`}
                    className={styles.img}
                    key={i}
                    onClick={() => {
                      setImgNumber(i);
                      setIsScroll(false);
                    }}
                  />
                );
              }
              return <div>{list}</div>;
            })()}
          </div>
        </div>
      </Dialog.Root>
    </div>
  );
}

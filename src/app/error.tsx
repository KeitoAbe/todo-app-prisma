"use client";

import { Button } from "@mui/material";
import styles from "./error.module.css";

export default function Error({ _, reset }: { _: Error; reset: () => void }) {
  return (
    <div className={styles.container}>
      <p className={styles.errorMessage}>エラーが発生しました</p>
      <Button variant="contained" onClick={reset}>
        再読み込み
      </Button>
    </div>
  );
}

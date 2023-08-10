"use client";

export default function Error({ _, reset }: { _: Error; reset: () => void }) {
  return (
    <div>
      <h1>エラーが発生しました</h1>
    </div>
  );
}

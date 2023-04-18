import { memo } from "react";

type Props = {
  b: number;
};

const ComponentB = function B({ b }: Props) {
  console.log("componentB");
  return <h1>コンポーネントB：{b}</h1>;
};

export default ComponentB;

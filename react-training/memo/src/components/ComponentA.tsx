import { memo } from "react";

type Props = {
  a: number;
};

const ComponentA = memo(function A({ a }: Props) {
  console.log("componentA");
  return <h1>コンポーネントA：{a}</h1>;
});

export default ComponentA;

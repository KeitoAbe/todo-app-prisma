import { useMemo } from "react";

type Props = {
  value: number;
};

function CalculationComponent({ value }: Props) {
  const doubledValue = useMemo(() => doubleValue(value), [value]);
  return (
    <div>
      演算によって取得した数値を2倍にしてレンダリングするコンポーネント：
      {doubledValue}
    </div>
  );
}

export default CalculationComponent;

function doubleValue(value: number): number {
  console.log("演算！");
  return value * 2;
}

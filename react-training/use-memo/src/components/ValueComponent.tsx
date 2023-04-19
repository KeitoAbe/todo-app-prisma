type Props = {
  value: number;
};

function ValueComponent({ value }: Props) {
  return (
    <div>
      演算を伴わずに取得した数値をレンダリングするコンポーネント：{value}
    </div>
  );
}

export default ValueComponent;

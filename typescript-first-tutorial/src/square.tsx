import style from "./square.module.css";

type Props = {
  isHighlight: boolean;
  onClick: () => void;
  value: string | null;
};

export function Square(props: Props) {
  return (
    <button
      className={
        props.isHighlight ? `${style.square} ${style.highlight_color}` : `${style.square}`
      }
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

type Props = {
  isHighlight: boolean;
  onClick: () => void;
  value: string | null;
};

export function Square(props: Props){
  return (
    <button
      className={props.isHighlight ? `square highlight-color` : `square`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export function Square(props) {
  return (
    <button
      className={props.isHighlight ? `square highlight-color` : `square`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

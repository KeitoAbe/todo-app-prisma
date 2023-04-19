import React, { memo } from "react";

type Props = {
  onClick: () => void;
};

const MemoizedEventComponent = memo(function EventComponent({
  onClick,
}: Props) {
  console.log("EventComponent レンダリング！");
  return (
    <div>
      <button onClick={onClick}>countを+1するボタン</button>
    </div>
  );
});

export default MemoizedEventComponent;

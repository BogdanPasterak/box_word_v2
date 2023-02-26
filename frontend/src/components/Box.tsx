import React from "react";

function Box(props: {
  order: number;
  imgUrl: string;
  letter: string;
  clicked: (position: number) => void;
}) {
  // if (props.index > 13) console.log("order", props.index, props.order);

  return (
    <div
      className="box"
      style={{
        backgroundImage: `url(${props.imgUrl})`,
        order: `${props.order}`,
      }}
      onClick={() => props.clicked(props.order)}
    >
      {props.letter !== " " && props.letter}
    </div>
  );
}

export default Box;

import React from "react";

function Box(props: {
  index: number;
  id: string;
  order: number;
  imgUrl: string;
  letter: string;
  clicked: (index: number) => void;
}) {
  // if (props.index > 13) console.log("order", props.index, props.order);

  return (
    <div
      className="box"
      id={props.id}
      style={{
        backgroundImage: `url(${props.imgUrl})`,
        order: `${props.order}`,
      }}
      onClick={() => props.clicked(props.index)}
    >
      {props.letter !== " " && props.letter}
    </div>
  );
}

export default Box;

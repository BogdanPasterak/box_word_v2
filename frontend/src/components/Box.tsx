import React from "react";

function Box(props: {
  index: number;
  id: string;
  imgUrl: string;
  letter: string;
  clicked: (index: number) => void;
}) {
  return (
    <div
      className="box"
      id={props.id}
      style={{ backgroundImage: `url(${props.imgUrl})` }}
      onClick={() => props.clicked(props.index)}
    >
      {props.letter}
    </div>
  );
}

export default Box;

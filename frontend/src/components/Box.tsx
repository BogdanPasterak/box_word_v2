import React from "react";

function Box(props: {
  id: string;
  imgUrl: string;
  letter: string;
  clicked: (id: string) => void;
}) {
  return (
    <div
      className="box"
      id={props.id}
      style={{ backgroundImage: `url(${props.imgUrl})` }}
      onClick={() => props.clicked(props.id)}
    >
      {props.letter}
    </div>
  );
}

export default Box;

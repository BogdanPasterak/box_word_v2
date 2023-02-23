import React from "react";

function Box(props: { id: string; imgUrl: string; letter: string }) {
  return (
    <div
      className="box"
      id={props.id}
      // onClick={(event) => handleClick(event)}
      style={{ backgroundImage: `url(${props.imgUrl})` }}
    >
      {props.letter}
    </div>
  );
}

export default Box;

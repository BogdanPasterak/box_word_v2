import React from "react";

interface Details {
  imgUrl: string;
}

function Box(props: Details) {
  return (
    <div
      className="box"
      id="m10"
      // onClick={(event) => handleClick(event)}
      // style={{ backgroundImage: `url(${m10})` }}
    >
      B
    </div>
  );
}

import bg from "./image/bg.jpg";
import images from "./image";
import { generateStub } from "./scripts/scripts";
import { bfsStart } from "./scripts/bfs";
import { dfsStart, openFile2 } from "./scripts/dfs";
import { aStart } from "./scripts/astar";
import { BoardObj } from "./models/board";
import { useState } from "react";
import Box from "./components/Box";
import { Expand } from "./models/expand";

function App() {
  // starting seting
  const [ex, updateEx] = useState(
    new Expand(generateStub(), Object.values(images))
  );
  // const [tiles, updateTiles] = useState(tilesSet());
  const [welcome, setWelcome] = useState("Welcome");

  function handleClick(index: number): void {
    if (isNeighborSpace(index)) {
      // console.log("klik jest sasiad", index);
      updateEx(ex.move(index).copy());
      console.log(ex.toString());
    } else console.log("klik", index);
  }

  // check if space is neighbor
  function isNeighborSpace(index: number): boolean {
    console.log("spacja", ex.pos, " index", index);

    if (index > 3 && ex.pos === index - 4) return true;
    if (index % 4 > 0 && ex.pos === index - 1) return true;
    if (index % 4 < 3 && ex.pos === index + 1) return true;
    if (index < 12 && ex.pos === index + 4) return true;
    return false;
  }

  return (
    <div
      className="procent"
      id="div-in"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="title" id="title">
        <h1>BOX WORD</h1>
        <p className="welcome">{welcome}</p>
      </div>
      <div className="buttons" id="buttons">
        <button onClick={bfsStart}>BFS</button>
        <button onClick={dfsStart}>DFS</button>
        <button onClick={aStart}>A *</button>
        <button onClick={openFile2}>Save data</button>
        {/* <button onClick={() => setLetters(generateStub())}>letters</button> */}
      </div>
      <div className="info" id="info">
        <span>Time 23:15</span>
        <h2 className="word">W O R D</h2>
        <span>Moves - 27</span>
      </div>
      <div className="board" id="board">
        {/* 15 boxes */}
        {Object.keys(images).map((m, index) => (
          <Box
            key={index}
            order={ex.order.indexOf(index)}
            imgUrl={ex.bg[index]}
            letter={ex.board[index]}
            clicked={handleClick}
          ></Box>
        ))}
        {/* box space */}
        {/* <div className="box" id="m25" style={{ order: 25 }}></div> */}
      </div>
      <div className="footer" id="footer">
        <p>
          <span>
            <a href="mailto:bogdanpasterak@gmail.com">Bogdan&nbsp;Pasterak</a>
          </span>
          &copy;
          <span>2023</span>
        </p>
        <p>
          <span>
            <a
              href="https://github.com/BogdanPasterak"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub&nbsp;<i className="fab fa-github"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/bogdan-pasterak-54b0b514a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linked&nbsp;<i className="fab fa-linkedin-in"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook&nbsp;<i className="fab fa-facebook-f"></i>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;

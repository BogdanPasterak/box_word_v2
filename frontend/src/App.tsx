import bg from "./image/bg.jpg";
import images from "./image";
import { generateStub } from "./scripts/scripts";
import { bfsStart } from "./scripts/bfs";
import { dfsStart, openFile2 } from "./scripts/dfs";
import { aStart } from "./scripts/astar";
import { BoardObj } from "./models/board";
import { useState } from "react";

function App() {
  // starting seting
  const [obj, updateObj] = useState(generateStub());
  const [welcome, setWelcome] = useState("Welcome");

  function setLetters(o: BoardObj) {
    let boxes = document.querySelectorAll(".box");

    boxes.forEach((box, index) => {
      box!.textContent = obj.board[index];
    });
  }

  function handleClick(event: any): void {
    // convert id to index
    let index = parseInt(event.target.id.slice(1)) - 10;
    console.log(index);
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
        <div
          className="box"
          id="m10"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${images.m10})` }}
        >
          {obj.board[0]}
        </div>
        <div
          className="box"
          id="m11"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${images.m11})` }}
        >
          {obj.board[1]}
        </div>
        <div
          className="box"
          id="m12"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${images.m12})` }}
        >
          {obj.board[2]}
        </div>
        <div
          className="box"
          id="m13"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${images.m13})` }}
        >
          {obj.board[3]}
        </div>
        <div
          className="box"
          id="m14"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${images.m14})` }}
        >
          {obj.board[4]}
        </div>
        <div
          className="box"
          id="m15"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${images.m15})` }}
        ></div>
        <div
          className="box"
          id="m16"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${images.m16})` }}
        ></div>
        <div
          className="box"
          id="m17"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${images.m17})` }}
        ></div>
        <div
          className="box"
          id="m18"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${images.m18})` }}
        ></div>
        <div
          className="box"
          id="m19"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${images.m19})` }}
        ></div>
        <div
          className="box"
          id="m20"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${images.m20})` }}
        ></div>
        <div
          className="box"
          id="m21"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${images.m21})` }}
        ></div>
        <div
          className="box"
          id="m22"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${images.m22})` }}
        ></div>
        <div
          className="box"
          id="m23"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${images.m23})` }}
        ></div>
        <div
          className="box"
          id="m24"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${images.m24})` }}
        ></div>
        <div className="box" id="m25"></div>
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

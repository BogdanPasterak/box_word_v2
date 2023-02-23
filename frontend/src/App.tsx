import bg from "./image/bg.jpg";
import m10 from "./image/m10.png";
import m11 from "./image/m11.png";
import m12 from "./image/m12.png";
import m13 from "./image/m13.png";
import m14 from "./image/m14.png";
import m15 from "./image/m15.png";
import m16 from "./image/m16.png";
import m17 from "./image/m17.png";
import m18 from "./image/m18.png";
import m19 from "./image/m19.png";
import m20 from "./image/m20.png";
import m21 from "./image/m21.png";
import m22 from "./image/m22.png";
import m23 from "./image/m23.png";
import m24 from "./image/m24.png";
import { generateStub } from "./scripts/scripts";
import { bfsStart } from "./scripts/bfs";
import { dfsStart, openFile2 } from "./scripts/dfs";
import { aStart } from "./scripts/astar";
import { BoardObj } from "./models/board";

function App() {
  let welcome = "Welcome";
  let obj: BoardObj = generateStub();
  // console.log("-" + result + "-");

  function setLetters() {
    // console.log(obj.toString());

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
        <button onClick={setLetters}>letters</button>
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
          style={{ backgroundImage: `url(${m10})` }}
        ></div>
        <div
          className="box"
          id="m11"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${m11})` }}
        ></div>
        <div
          className="box"
          id="m12"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${m12})` }}
        ></div>
        <div
          className="box"
          id="m13"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${m13})` }}
        ></div>
        <div
          className="box"
          id="m14"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${m14})` }}
        ></div>
        <div
          className="box"
          id="m15"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${m15})` }}
        ></div>
        <div
          className="box"
          id="m16"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${m16})` }}
        ></div>
        <div
          className="box"
          id="m17"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${m17})` }}
        ></div>
        <div
          className="box"
          id="m18"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${m18})` }}
        ></div>
        <div
          className="box"
          id="m19"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${m19})` }}
        ></div>
        <div
          className="box"
          id="m20"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${m20})` }}
        ></div>
        <div
          className="box"
          id="m21"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${m21})` }}
        ></div>
        <div
          className="box"
          id="m22"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${m22})` }}
        ></div>
        <div
          className="box"
          id="m23"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${m23})` }}
        ></div>
        <div
          className="box"
          id="m24"
          onClick={(event) => handleClick(event)}
          style={{ backgroundImage: `url(${m24})` }}
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

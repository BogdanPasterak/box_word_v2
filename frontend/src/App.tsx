import bg from "./image/bg.jpg";
import images from "./image";
import {
  counting,
  generateBoard,
  generateStub,
  winTest,
} from "./scripts/scripts";
import { bfsStart } from "./scripts/bfs";
import { dfsStart, openFile2, unresolved } from "./scripts/dfs";
import { aStart, openFile3 } from "./scripts/astar";
import { BoardObj } from "./models/board";
import { useState } from "react";
import Box from "./components/Box";
import { Expand } from "./models/expand";
import { solutions } from "./assets/solutions";
import { words } from "./assets/words";
import { Game } from "./models/game";

function App() {
  const startLevel = 3;
  // starting seting
  // current game
  const [ex, updateEx] = useState(
    new Expand(generateStub("ABD***C******** "), Object.values(images))
  );
  // rest of user game data
  const [game, setGame] = useState(newGame());

  function newGame(): Game {
    return new Game("WORD", 5);
  }

  function handleClick(index: number, id: string): void {
    if (isNeighborSpace(index)) {
      updateEx(ex.move(index).copy());

      if (winTest(ex)) {
        ex.word.split("").forEach((l) => {
          shake("m" + (ex.board.indexOf(l) + 10).toString());
        });
      }
    } else {
      shake(id);
    }
  }

  function shake(id: string) {
    let box = document.querySelector(`#${id}`);
    box?.classList.add("shakeit");
    setTimeout(function () {
      box?.classList.remove("shakeit");
    }, 400);
  }

  // check if space is neighbor
  function isNeighborSpace(index: number): boolean {
    if (index > 3 && ex.pos === index - 4) return true;
    if (index % 4 > 0 && ex.pos === index - 1) return true;
    if (index % 4 < 3 && ex.pos === index + 1) return true;
    if (index < 12 && ex.pos === index + 4) return true;
    return false;
  }

  function show(): void {
    console.log(ex.toString());
  }

  function levelChange(value: string) {
    let v = Number.parseInt(value);

    let n = Math.floor(Math.random() * solutions[v].length);
    let b = solutions[v][n];
    let w = words[Math.floor(Math.random() * words.length)].toUpperCase();

    setGame(game.updateGame(w, v));
    updateEx(new Expand(generateBoard(b, w), Object.values(images)));
  }

  return (
    <div
      className="procent"
      id="div-in"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="title" id="title">
        <h1>BOX WORD</h1>
        <p className="welcome">{game.person}</p>
      </div>
      <div className="buttons" id="buttons">
        <select
          className="bt"
          name="level"
          id="level"
          value={game.level}
          onChange={(e) => levelChange(e.target.value)}
        >
          {Array(24)
            .fill(0)
            .map((_, i) => (
              <option key={i + startLevel} value={i + startLevel}>
                Level {i + startLevel}
              </option>
            ))}
        </select>
        <button className="bt" onClick={show}>
          Click
        </button>
        <button className="bt" onClick={bfsStart}>
          BFS
        </button>
        <button className="bt" onClick={dfsStart}>
          DFS
        </button>
        <button className="bt" onClick={aStart}>
          A *
        </button>
        <button className="bt" onClick={openFile3}>
          Save data
        </button>
        {/* <button onClick={unresolved}>Counting</button> */}
      </div>
      <div className="info" id="info">
        <span>Time 23:15</span>
        <h2 className="word">{game.word}</h2>
        <span>Moves - 27</span>
      </div>
      <div className="board" id="board">
        {/* 15 boxes */}
        {Object.keys(images).map((m, index) => (
          <Box
            key={index}
            id={m}
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

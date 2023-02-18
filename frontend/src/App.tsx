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
import { print, generateStub } from "./scripts/scripts";
import { bfsStart } from "./scripts/bfs";
import { dfsStart, openFile, openFile2 } from "./scripts/dfs";
import { aStart } from "./scripts/astar";

function App() {
  let result = generateStub();
  let welcome = "Welcome";
  // console.log("-" + result + "-");

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
      </div>
      <div className="info" id="info">
        <span>Time 23:15</span>
        <h2 className="word">W O R D</h2>
        <span>Moves - 27</span>
      </div>
      <div className="board" id="board">
        <div className="box" id="m10" onClick={() => print("10")}>
          <img src={m10} alt="" />
        </div>
        <div className="box" id="m11" onClick={() => print("11")}>
          <img src={m11} alt="" />
        </div>
        <div className="box" id="m12" onClick={() => print("12")}>
          <img src={m12} alt="" />
        </div>
        <div className="box" id="m13" onClick={() => print("13")}>
          <img src={m13} alt="" />
        </div>
        <div className="box" id="m14" onClick={() => print("14")}>
          <img src={m14} alt="" />
        </div>
        <div className="box" id="m15" onClick={() => print("15")}>
          <img src={m15} alt="" />
        </div>
        <div className="box" id="m16" onClick={() => print("16")}>
          <img src={m16} alt="" />
        </div>
        <div className="box" id="m17" onClick={() => print("17")}>
          <img src={m17} alt="" />
        </div>
        <div className="box" id="m18" onClick={() => print("18")}>
          <img src={m18} alt="" />
        </div>
        <div className="box" id="m19" onClick={() => print("19")}>
          <img src={m19} alt="" />
        </div>
        <div className="box" id="m20" onClick={() => print("20")}>
          <img src={m20} alt="" />
        </div>
        <div className="box" id="m21" onClick={() => print("21")}>
          <img src={m21} alt="" />
        </div>
        <div className="box" id="m22" onClick={() => print("22")}>
          <img src={m22} alt="" />
        </div>
        <div className="box" id="m23" onClick={() => print("23")}>
          <img src={m23} alt="" />
        </div>
        <div className="box" id="m24" onClick={() => print("24")}>
          <img src={m24} alt="" />
        </div>
        <div className="box" id="m25" onClick={() => print("25")}>
          {/* <img src={m10} alt="" /> */}
        </div>
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

import bg from "./image/bg.jpg";
import { print } from "./Scrypts";

function App() {
  return (
    <div
      className="procent"
      id="div-in"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="title" id="title">
        title
      </div>
      <div className="buttons" id="buttons">
        buttons
      </div>
      <div className="info" id="info">
        info
      </div>
      <div className="board" id="board">
        <div className="box">
          <img src="./favicon.ico" alt="" />
        </div>
        <div className="box" onClick={print}></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="footer" id="footer">
        footer
      </div>
    </div>
  );
}

export default App;

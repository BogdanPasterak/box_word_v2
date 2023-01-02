import bg from "./image/bg.jpg";
import m10 from "./image/m10.png";
import m11 from "./image/m11.png";
import m12 from "./image/m12.png";
import m13 from "./image/m13.png";
import { print, generateStub } from "./Scrypts";

function App() {
  let result = generateStub();
  console.log("-" + result + "-");

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
        <div className="box" id="m10" onClick={print}>
          <img src={m10} alt="" />
        </div>
        <div className="box" id="m11" onClick={print}>
          <img src={m11} alt="" />
        </div>
        <div className="box" id="m12" onClick={print}>
          <img src={m12} alt="" />
        </div>
        <div className="box" id="m13" onClick={print}>
          <img src={m13} alt="" />
        </div>
      </div>
      <div className="footer" id="footer">
        footer
      </div>
    </div>
  );
}

export default App;

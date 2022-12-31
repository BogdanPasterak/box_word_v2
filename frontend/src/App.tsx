import bg from "./image/bg.jpg";

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
      <div className="board" id="board">
        <img src="./favicon.ico" alt="" />
      </div>
      <div className="footer" id="footer">
        footer
      </div>
    </div>
  );
}

export default App;

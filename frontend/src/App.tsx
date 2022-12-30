import bg from "./image/bg.jpg";

function App() {
  return (
    <div
      className="procent"
      id="div-in"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div>
        <img src="./favicon.ico" alt="" />
      </div>
    </div>
  );
}

export default App;

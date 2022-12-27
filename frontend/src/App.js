import "./App.css";

function App() {
  let board = ["a x x x", "b x x x", "c x x x", "d x x x"];

  const run = () => {
    console.log("Bogdan");
  };

  return (
    <div>
      <h1 className="my">{board[0]}</h1>
      <h1 className="my">{board[1]}</h1>
      <h1 className="my">{board[2]}</h1>
      <h1 className="my">{board[3]}</h1>

      <button onClick={run}>Click</button>
    </div>
  );
}

export default App;

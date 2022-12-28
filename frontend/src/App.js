import "./App.css";

class BoardObj {
  fields;
  space;

  constructor(s = null) {
    if (s) this.fields = [...s];
    else this.fields = [..."xxxxxxxxxxxxxxx "];
    this.space = 15;
  }
}

class BoardView {
  b;
  constructor(bo) {
    let f = bo.fields;
    this.b = [];
    this.b.push([f[0], f[1], f[2], f[3]].join(" "));
    this.b.push([f[4], f[5], f[6], f[7]].join(" "));
    this.b.push([f[8], f[9], f[10], f[11]].join(" "));
    this.b.push([f[12], f[13], f[14], f[15]].join(" "));
  }
}

function App() {
  let board = ["a x x x", "b x x x", "c x x x", "d x x x"];

  const run = () => {
    console.log("Bogdan");
    let obj = new BoardObj();
    console.log(obj.fields);
    let view = new BoardView(obj);
    console.log(view);
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

export function print() {
  console.log("Bogdan");
}

// generete random set with letters A,B,C,D
export function generateStub(): string {
  let temp: string[] = "*************** ".split("");
  let index = 15;

  //random position of 4 letters
  ["A", "B", "C", "D"].forEach((e) => {
    do index = Math.floor(Math.random() * 15);
    while (!(temp[index] === "*"));

    temp[index] = e;
  });

  // connect to string
  return temp.join("");
}

// import { foo } from "./modules/test";
// var say = require("./modules/test");

window.onload = () => {
  console.log("Loaded");
  document.getElementById("btn").addEventListener("click", () => {
    console.log("Cos");
    say();
  });
};

function print(msg) {
  console.log(msg);
  // console.log(m);
}

// function say() {
//   console.log("Foo");
// }

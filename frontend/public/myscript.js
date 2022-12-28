console.log("Bogdan");
window.onload = () => {
  console.log("on load");
};

window.onresize = (e) => sizeFitting();

function sizeFitting() {
  let div_in = document.getElementById("div-in");
  if (div_in.clientHeight > div_in.clientWidth) {
    console.log("wyzszy");
  } else {
    console.log("szerszy");
  }
}

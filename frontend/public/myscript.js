// Events call to setting the layout and scaling elements
window.onload = () => sizeFitting();
window.onresize = (e) => sizeFitting();
window.onorientationchange = (e) => sizeFitting();

function sizeFitting() {
  // div with 1% of view border (css setting size)
  let div_in = document.getElementById("div-in");
  let w = div_in.clientWidth;
  let h = div_in.clientHeight;

  if (h > w * 1.2) {
    // vertical position
    if (h > w * 1.6) {
      console.log("ver 16:9");
    } else {
      console.log("ver 3:2");
    }
  } else {
    // horizontal position
    if (w * 0.8 < h) {
      console.log("square");
    } else if (w * 0.6 < h) {
      console.log("hor 3:2");
    } else {
      console.log("hor 16:9");
    }
  }
}

// Events call to setting the layout and scaling elements
window.onload = () => sizeFitting();
window.onresize = (e) => sizeFitting();
window.onorientationchange = (e) => sizeFitting();

function sizeFitting() {
  // div with 1% of view border (css setting size)
  let div_in = document.getElementById("div-in");
  let title = document.getElementById("title");
  let board = document.getElementById("board");
  let footer = document.getElementById("footer");
  let w = div_in.clientWidth;
  let h = div_in.clientHeight;
  console.log("w = ", w, "  h = ", h);

  // 100% width
  title.style.width = w + "px";
  footer.style.width = w + "px";
  // 10 % of full hight
  title.style.height = Math.floor(h / 10) + "px";
  footer.style.height = Math.floor(h / 15) + "px";

  if (h > w * 1.2) {
    // vertical position
    board.style.width = w + "px";
    board.style.height = w + "px";
    if (h > w * 1.6) {
      // console.log("ver 16:9");
    } else {
      // console.log("ver 3:2");
    }
  } else {
    // horizontal position
    if (w * 0.8 < h) {
      // console.log("square");
    } else if (w * 0.6 < h) {
      // console.log("hor 3:2");
      title.style.width = "50%";
    } else {
      // console.log("hor 16:9");
      board.style.width = h + "px";
      board.style.height = h + "px";
      title.style.width = w - h + "px";
      footer.style.width = w - h + "px";
    }
  }
}

// Events call to setting the layout and scaling elements
window.onload = () => sizeFitting();
window.onresize = (e) => sizeFitting();
window.onorientationchange = (e) => sizeFitting();

function sizeFitting() {
  // div with 1% of view border (css setting size)
  let div_in = document.getElementById("div-in");
  let title = document.getElementById("title");
  let buttons = document.getElementById("buttons");
  let info = document.getElementById("info");
  let board = document.getElementById("board");
  let footer = document.getElementById("footer");
  // screen size
  let w = div_in.clientWidth;
  let h = div_in.clientHeight;
  let temp, box;
  // console.log("w = ", w, "  h = ", h);

  // 100% width
  box =
    title.style.width =
    buttons.style.width =
    info.style.width =
    footer.style.width =
    board.style.width =
      w + "px";
  // % of full hight
  title.style.height = Math.floor(h / 12) + "px";
  footer.style.height = Math.floor(h / 15) + "px";
  board.style.height = w + "px";
  temp = Math.floor((h - w - title.clientHeight - footer.clientHeight) / 2);
  buttons.style.height = info.style.height = temp + "px";
  // rest parameters
  title.style.order = "1";
  buttons.style.order = "2";
  info.style.order = "3";
  board.style.order = "4";
  footer.style.order = "5";
  board.style.position = footer.style.position = "";

  if (h > w * 1.35) {
    // vertical position
    if (h > w * 1.7) {
      // console.log("ver 16:9");
    } else {
      // console.log("ver 3:2");
    }
  } else {
    // horizontal position
    if (w < h * 1.2) {
      // console.log("square");
      buttons.style.order = "3";
      info.style.order = "2";
      box = w * (w < h ? 0.8 : 0.65);
      buttons.style.width = w - box + "px";
      buttons.style.height =
        board.style.width =
        board.style.height =
          box + "px";
      board.style.position = "absolute";
      board.style.left = w - box + w * 0.01 + "px";
      temp = h - title.clientHeight - footer.clientHeight - box;
      board.style.top = temp + title.clientHeight + h * 0.01 + "px";
      info.style.height = temp + "px";
    } else if (w * 0.6 < h) {
      // console.log("hor 3:2");
      info.style.order = "2";
      buttons.style.order = "3";
      box = h - title.clientHeight - footer.clientHeight;
      info.style.width = buttons.style.width = w - box + "px";
      info.style.height = buttons.style.height =
        Math.floor((h - title.clientHeight) / 2) + "px";
      board.style.width = board.style.height = footer.style.width = box + "px";
      footer.style.position = board.style.position = "absolute";
      footer.style.left = board.style.left = w - box + w * 0.01 + "px";
      temp = title.clientHeight + h * 0.01;
      board.style.top = temp + "px";
      footer.style.top = temp + box + "px";
    } else {
      // console.log("hor 16:9");
      info.style.order = "2";
      buttons.style.order = "3";
      footer.style.order = "4";
      board.style.order = "5";
      box = h;
      board.style.width = board.style.height = box + "px";
      title.style.width =
        info.style.width =
        buttons.style.width =
        footer.style.width =
          w - box + "px";
      temp = Math.floor((h - title.clientHeight - footer.clientHeight) / 2);
      info.style.height = buttons.style.height = temp + "px";
    }
  }
}

import { words } from "../assets/words2015json";

export function filterWords() {
  console.log(`========= start ============`);

  const filename = `words.tsx`;
  const type = "text/plain";

  let data = ["export const words = ["];

  // add words if not repetable letters
  for (const w of words) {
    // regex no repetable lettrs
    if (!/(\w).*\1/i.test(w.w)) data.push(`\n"${w.w}",`);
  }

  // save to file
  data.push(`\n]`);

  var file = new Blob(data, { type: type });
  //
  var a = document.createElement("a"),
    url = URL.createObjectURL(file);
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
  console.log(`========= stop ============`);
}

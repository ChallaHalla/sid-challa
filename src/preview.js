import cssToHTML from "./cssToHTML";

const styleSheet = document.getElementById("style-sheet");
const styledCss = document.getElementById("styled-css");

if (styleSheet && styledCss) {
  styledCss.innerHTML = cssToHTML(styleSheet.textContent);
}

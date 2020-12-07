export const IntroText = [
"Welcome to my personal site!",
  "hmmm...",
  "This looks a little bare...",
  "Let's fix that"
   ];

export const svgHTML = [`<svg height="150" width="1200">
    <text x="10" y="120" font-size="60" fill="white" stroke="white" class="title__name">Siddarth Challa</text>
  </svg>`
];

console.log("ASDSA")
const cssContent = document.getElementById("main-css")

export const Css = [cssContent.outerHTML];
cssContent.disabled = true

const bioContent = document.getElementById("content")

export const bio = [bioContent.outerHTML];

export const cssToHTML = (str) => {
  return str.replace(/(#)(.*)(\d|){/gm, "<span class='id_selector'>$1$2</span> {").
  replace(/(\.)(.*)(\d|){/gm, "<span class='class_selector'>$1$2</span> {").
  replace(/(.*):(.*);/gm, "<span class='property'>$1</span>:<span class='value'>$2</span>;").
  replace(/\n/gm, "<br>").
  replace(/<\s*style[^>]*>/gm,"").
  replace(/<\/style>/gm,"");
};

import Typed from "typed.js"
import cssToHTML from "./cssToHTML";
const preview = require("html-loader!./preview.html");
const typedCss = require("html-loader!./css/typed.css");

const updateScroll = () => {
  const styleCss = document.getElementById("styled-css");
  styleCss.scrollTop = styleCss.scrollHeight;
}

const intervalId = setInterval(updateScroll,10);

const html = preview.default
const doc = document.createElement('html');
doc.innerHTML = html

let css = typedCss.default
css = css.replaceAll("{ ", "{ \n")
css = css.replaceAll("}", "} \n")
css = css.replaceAll(/;/g, "; \n")



const svg = {
  strings: [doc.querySelector("#svg").innerHTML],
  typeSpeed: 15,
  startDelay: 200,
  showCursor: false,
  contentType:"text",
  onComplete:(self)=>{
    self.el.innerHTML = self.el.innerText;
  }
}

const styleSheet = {
  strings: [css],
  typeSpeed: 14,
  showCursor: false,
  onComplete: () => {
    clearInterval(intervalId);
  }
};

const cssHTML = {
  strings: [ cssToHTML(css) ],
  typeSpeed: 9,
  showCursor: false,
};


const bio ={
  strings: [doc.querySelector("#bio").innerHTML],
  typeSpeed: 10,
  showCursor: false,
  loop: false,
}

const skip ={
  strings: ["<a href='/finished.html'><i>(Click here to skip the site building itself.)</i></a>"],
  typeSpeed: 15,
  showCursor: false,
  loop: false,
}

const typeStyle = () => {
  new Typed('#style-sheet', styleSheet);
  new Typed('#styled-css', cssHTML);
  new Typed('#svg', svg);
  new Typed('#bio', bio);
};

const intro = {
  strings: [
    "Welcome to my personal site!",
    "hmmm...",
    "This looks a little bare...",
    "Let's fix that"
 ],
  typeSpeed: 18,
  showCursor: false,
  onComplete:(self)=>{
    typeStyle();
    self.destroy();
  },
}

new Typed('#intro', intro);
new Typed('#skip', skip);

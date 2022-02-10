import Typed from "typed.js"
import cssToHTML from "./cssToHTML";
const preview = require("html-loader!./preview.html");
const typedCss = require("html-loader!./css/typed.css");

fetch(".css/typed.css").then((r) => console.log(r))
//import ".css/typed.css"
//

const updateScroll = () => {
  const styleCss = document.getElementById("styled-css");
  styleCss.scrollTop = styleCss.scrollHeight;
}

setInterval(updateScroll,10);


function type(content){
  console.log("ENTERED", content)
  const intro = {
    strings: [
      "Welcome to my personal site!",
      "hmmm...",
      "This looks a little bare...",
      "Let's fix that"
   ],
    typeSpeed: 20,
    showCursor: false,
    onComplete:(self)=>{
      typeStyle();
      self.destroy();
    },
  }
  
  const svg = {
    strings: content.svgHTML,
    typeSpeed: 20,
    startDelay: 10000,
    showCursor: false,
    contentType:"text",
    onComplete:(self)=>{
      self.el.innerHTML = self.el.innerText;
    }
  }
  
  const cssText = {
    strings: content.css,
    typeSpeed: 15,
    showCursor: false,
  };
  
  const cssHTML = {
    strings: [ content.cssHTML ],
    typeSpeed: 12,
    showCursor: false,
  };
  
  
  const bio ={
    strings: content.bio,
    typeSpeed: 10,
    showCursor: false,
    loop: false,
  }
  
  const typeStyle = () => {
    const typeCss = new Typed('#style-sheet', cssText);
    const typeSvgStyle = new Typed('#styled-css', cssHTML);
    const typeSVG = new Typed('#svg', svg);
    const typeBio = new Typed('#bio', bio);
  };
  
  
  const typeIntro = new Typed('#intro', intro);
}

const content = {}
const html = preview.default
const doc = document.createElement('html');
doc.innerHTML = html
content.svgHTML = [doc.querySelector("#svg").innerHTML]
content.bio = [doc.querySelector("#bio").innerHTML]

const css = typedCss.default
content.css = [css]
content.cssHTML = cssToHTML(css)
type(content)

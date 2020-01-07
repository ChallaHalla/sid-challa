import * as content from "./content.js";
import Typed from "typed.js"

const updateScroll = () => {
  const styleCss = document.getElementById("styled-css");
  styleCss.scrollTop = styleCss.scrollHeight;
}

setInterval(updateScroll,10);



const intro = {
  strings: content.IntroText,
  typeSpeed: 20,
  showCursor: false,
  onComplete:(self)=>{
    typeStyle();
    self.destroy();
    console.log(self);
  },
}

const svg = {
  strings: content.svgHTML,
  typeSpeed: 20,
  showCursor: false,
  contentType:"text",
  onComplete:(self)=>{
    self.el.innerHTML = self.el.innerText;
  }
}
const css = {
  strings: content.Css,
  typeSpeed: 15,
  showCursor: false,
};

const htmlStrings = content.cssToHTML( content.Css[0] )

const svgStyle = {
  strings: [ htmlStrings ],
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
  console.log("Typing style");
  const typeCss = new Typed('#style-sheet', css);
  const typeSvgStyle = new Typed('#styled-css', svgStyle);
  const typeSVG = new Typed('#svg', svg);
  const typeBio = new Typed('#bio', bio);
};


const typeIntro = new Typed('#intro', intro);


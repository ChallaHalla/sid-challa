import * as content from "./content.js";
import Typed from "typed.js"

const updateScroll = () => {
  const styleCss = document.getElementById("styled-css");
  styleCss.scrollTop = styleCss.scrollHeight;
}

setInterval(updateScroll,10);


var intro = {
  strings: content.IntroText,
  typeSpeed: 20,
  showCursor: false,
  contentType:"text",
  onComplete: (self) => {
    self.options.contentType="html";
    self.el.innerHTML = self.el.innerText;
  }
}
var css = {
  strings: content.Css,
  typeSpeed: 15,
  startDelay: 6000,
  showCursor: false,
};

const htmlStrings = content.Css[0].
replace(/(#)(.*)(\d|){/gm, "<span class='id_selector'>$1$2</span> {").
replace(/(\.)(.*)(\d|){/gm, "<span class='class_selector'>$1$2</span> {").
replace(/(.*):(.*);/gm, "<span class='property'>$1</span>:<span class='value'>$2</span>;").
replace(/\n/gm, "<br>").
replace(/<\s*style[^>]*>/gm,"").
replace(/<\/style>/gm,"");

var svgStyle = {
  strings: [ htmlStrings ],
  typeSpeed: 12,
  startDelay: 6000,
  showCursor: false,
};

var bio ={
  strings: content.bio,
  typeSpeed: 40,
  startDelay: 6000,
  showCursor: false,
  loop: false,
 // contentType:"text",
 // onStringTyped: (arrayPos, self) => {
 //   console.log(arrayPos,self)
 //   self.el.innerHTML = self.options.strings.slice(arrayPos,arrayPos+1);
 // },
}



var typeIntro = new Typed('#intro', intro);
var typeCss = new Typed('#style-sheet', css);
var typeSvgStyle = new Typed('#styled-css', svgStyle);
var typeBio = new Typed('#bio', bio);

import * as content from "/content.js";
var intro = {
  strings: content.IntroText,
  typeSpeed: 20,
  showCursor: false,
  contentType: "text",
  onComplete: self => {
    console.log(self);
    self.options.contentType = "html";
    self.el.innerHTML = self.el.innerText;
    console.log(self.el);
  }
};

var css = {
  strings: content.CssHTML,
  typeSpeed: 15,
  startDelay: 6000,
  showCursor: false
};

var svgStyle = {
  strings: content.SvgStyle,
  typeSpeed: 15,
  startDelay: 6000,
  showCursor: false
};

var bio = {
  strings: content.bio,
  typeSpeed: 40,
  startDelay: 6000,
  showCursor: false
};

var typeIntro = new Typed('#intro', intro);
var typeCss = new Typed('#typed-container', css);
var typeSvgStyle = new Typed('#styled-css', svgStyle);
var typeBio = new Typed('#bio', bio);

//import * as contents from "contents";
//console.log(contents);
console.log("HERE");
var intro = {
  strings: ["Welcome to my personal site!", "hmmm...", "This looks a little bare...", "Let's fix that"],
  typeSpeed: 20,
  showCursor: false
};

var options = {
  strings: [`<style id=typed-css>
@keyframes dash {
  0%{
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    fill:white;
  }
  40%{
    stroke-dasharray: 80;
    stroke-dashoffset: 200;
    stroke-width: 1;
    fill:white;
  }
  65%{
    stroke-dasharray: .001;
    stroke-dashoffset: 0;
    stroke-width: 2;
  }
  100%{
    fill: black;
  }
}
svg {
  display: block;
}
.title__name {
  stroke: black;
  font-family: 'times-new-roman', sans-serif;
  stroke-dasharray: 200;
  stroke-dashoffset: 800;
  stroke-width: 0;
  animation: dash 7s linear forwards;
}

  </style> <br/> <br/>`],
  typeSpeed: 20,
  startDelay: 6000,
  showCursor: false
};

var options2 = {
  strings: [`@keyframes dash {
  0%{
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    fill:white;
  }
  40%{
    stroke-dasharray: 80;
    stroke-dashoffset: 200;
    stroke-width: 1;
    fill:white;
  }
  65%{
    stroke-dasharray: .001;
    stroke-dashoffset: 0;
    stroke-width: 2;
  }
  100%{
    fill: black;
  }
}
svg {
  display: block;
}
.title__name {
  stroke: black;
  font-family: 'times-new-roman', sans-serif;
  stroke-dasharray: 200;
  stroke-dashoffset: 800;
  stroke-width: 0;
  animation: dash 7s linear forwards;
}

<br/> <br/>`],
  typeSpeed: 20,
  startDelay: 6000,
  showCursor: false
};

var typeIntro = new Typed('#intro', intro);
var typed = new Typed('#typed-container', options);
var typed2 = new Typed('#styled-css', options2);

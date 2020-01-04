module.exports.SvgStyle = [`<style id=typed-css>
  #styled-css{
    white-space:pre;
    display:inline-block;
  }
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

  </style> <br/> <br/>`];

module.exports.IntroText = ["Welcome to my personal site!",
  "hmmm...",
  "This looks a little bare...",
  "Let's fix that"];

module.exports.CssHTML = [ `@keyframes dash {
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

<br/> <br/>`];


var options = {
  strings: [
//  "Welcome to my personal site!",
//  "hmmm...",
//  "This looks a little bare...",
//  "Let's fix that",
  `<style id=typed-css>
  #typed-container::before{ content: "Read this: "; }
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
.title__name {
  font-family: 'times-new-roman', sans-serif;
  stroke-width: 0;
  stroke-dasharray: 200;
  stroke-dashoffset: 800;
  stroke: black;
  animation: dash 7s linear forwards;
}



  </style> <br/> <br/>`],
  typeSpeed: 10,
};

var typed = new Typed('#typed-container', options);

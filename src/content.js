export const IntroText = [
"Welcome to my personal site!",
  "hmmm...",
  "This looks a little bare...",
  "Let's fix that",
 `<svg height="150" width="1200">
    <text x="10" y="120" font-size="60" fill="white" stroke="white" class="title__name">Siddarth Challa</text>
  </svg>
`
  ];


export const Css = [`
  #styled-css{
    display:inline-block;
    float:right;
  }
  .id_selector{
    color: red;
  }
  .property {
    color: orange;
  }
  .class_selector{
    color: green;
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
.title__name {
  stroke: black;
  font-family: 'times-new-roman', sans-serif;
  stroke-dasharray: 200;
  stroke-dashoffset: 800;
  stroke-width: 0;
  animation: dash 7s linear forwards;
}
  `];

export const bio = [ `<h3> Credentials:</h3>`, `<h3> Credentials:</h3><span>Full Stack Engineer @ <a href="httspans://dovetale.com">Dovetale</a></span>
<span>Software Engineering Intern @ AWS <span>
<span>Math/CS from NYU, class of 2019 </span>
<span>Former Super Smash Brothers Melee TO/Player </span>
<small>Falco/Fox main (catch these hands)</small><h3> Catch me on: </h3><span>github.com/ChallaHalla</span>
<span>twitter.com/darthchalla</span><h3>See my work:</h3><span>Random Acts of Pizza</span>
<span>Geras</span><h3>About me:</h3><span>hmmm what I need to say lol</span>
`];

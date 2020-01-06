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


export const Css = [`
.id_selector{
  color: #29A006;
}
.class_selector{
  color: #06A07D;
}
.property {
  color: #2C81CD;
}
#styled-css{
  display:inline-block;
  float:right;
  font-family: courier;
  color: white;
  background: #0E3702;
  width: 600px;
  height: 600px;
  overflow: scroll;
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

/*
 * Pay attention to the name animation :3 ^6000
 *
 * That animation css is kinda messy but w.e
 *
 * Time to make this site look cool
 */
  `];

export const bio = [ `<h3> Credentials:</h3>
<span>Full Stack Engineer @ <a href="https://dovetale.com">Dovetale</a></span>
<span>Software Engineering Intern @ AWS <span>
<span>Math/CS from NYU, class of 2019 </span>
<span>Former Super Smash Brothers Melee TO/Player </span>
<small>Falco/Fox main (catch these hands)</small><h3> Catch me on: </h3><span>github.com/ChallaHalla</span>
<span>twitter.com/darthchalla</span><h3>See my work:</h3><span>Random Acts of Pizza</span>
<span>Geras</span><h3>About me:</h3><span>hmmm what I need to say lol</span>`];

export const cssToHTML = (str) => {
  return str.replace(/(#)(.*)(\d|){/gm, "<span class='id_selector'>$1$2</span> {").
  replace(/(\.)(.*)(\d|){/gm, "<span class='class_selector'>$1$2</span> {").
  replace(/(.*):(.*);/gm, "<span class='property'>$1</span>:<span class='value'>$2</span>;").
  replace(/\n/gm, "<br>").
  replace(/<\s*style[^>]*>/gm,"").
  replace(/<\/style>/gm,"");
};

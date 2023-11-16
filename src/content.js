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

export const bio = [ `
<div class="section__container">
<h3> Credentials:</h3>
<span>Full Stack Engineer @ <a href="https://dovetale.com">Dovetale</a></span>
<span>Software Engineering Intern @ AWS <span>
<span>Math/CS from NYU, class of 2019 </span>
<span>Former Super Smash Brothers Melee TO/Player </span>
<small>Falco/Fox main (catch these hands)</small>
</div>

<div class="section__container">
<h3> Catch me on: </h3><span>github.com/ChallaHalla</span>
<span>twitter.com/darthchalla</span><h3>See my work:</h3><span>Random Acts of Pizza</span>
<span>Geras</span>
</div>

<div class="section__container">
<h3>About me:</h3><span>hmmm what I need to say lol</span>
</div>`];

export const cssToHTML = (str) => {
  return str.replace(/(#)(.*)(\d|){/gm, "<span class='id_selector'>$1$2</span> {").
  replace(/(\.)(.*)(\d|){/gm, "<span class='class_selector'>$1$2</span> {").
  replace(/(.*):(.*);/gm, "<span class='property'>$1</span>:<span class='value'>$2</span>;").
  replace(/\n/gm, "<br>").
  replace(/<\s*style[^>]*>/gm,"").
  replace(/<\/style>/gm,"");
};

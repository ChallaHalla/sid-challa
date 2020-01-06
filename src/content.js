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

export const toEscapedHtml = (str) => {
 return str.replace(/</g,"&lt;").
 replace(/>/g,"&gt;")
}


export const generateEscapedHTMLArray = (strings) => {

return strings[0].split("\n");

//   const escapedHTMLString = strings[0];
//   const stringsToHTML = [];
//   [...escapedHTMLString ].forEach((c,i) => {
//    if(c === "\n"){
//      if(stringsToHTML.length > 0){
//        // generate html to escape
//          const prevString = stringsToHTML[stringsToHTML.length -1]
//          //let newString = stringToHTML(prevString);
//
//          let newString = "";
//          newString += escapedHTMLString.substring(toEscapedHtml(prevString).length-1, i);
//          console.log(newString);
//          stringsToHTML.push(newString);
//      }else{
//        stringsToHTML.push( escapedHTMLString.substring(0,i));
//      }



      //append current substring to array
      //
      //
      //flow
      //
      //insert escaped html,
      //change current element html to unescaped html
      //
      //next string
  //  }


  // });
  // return stringsToHTML;
}

export const stringToHTML = (str) => {
 return str.replace(/&lt;/g,"<").
 replace(/&gt;/g,">")
}

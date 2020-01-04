(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
console.log(content);
var intro = {
  strings:[
  "Welcome to my personal site!",
  "hmmm...",
  "This looks a little bare...",
  "Let's fix that",
  ],
  typeSpeed: 20,
  showCursor: false,
}


var options = {
  strings: [
    `<style id=typed-css>
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
  showCursor: false,
};

var options2 = {
  strings: [
`@keyframes dash {
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
  showCursor: false,
};



var typeIntro = new Typed('#intro', intro);
var typed = new Typed('#typed-container', options);
var typed2 = new Typed('#styled-css', options2);

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = register;
exports.revert = revert;

function register() {}

function revert() {}
},{}],3:[function(require,module,exports){
exports = module.exports = function (...args) {
  return register(...args);
};

exports.__esModule = true;

const node = require("./node");

const register = node.default;
Object.assign(exports, node);
},{"./node":2}],4:[function(require,module,exports){
// Enter the app here so that we can use ES6 features

require("@babel/register")({
  presets: ["@babel/preset-env"]
});

// Import the rest of our application.
module.exports = require('./app.js')


},{"./app.js":1,"@babel/register":3}]},{},[4]);

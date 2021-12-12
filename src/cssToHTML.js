export default function cssToHTML (str) {
  return str.replace(/(#)(.*)(\d|){/gm, "<span class='id_selector'>$1$2</span> {").
  replace(/(\.)(.*)(\d|){/gm, "<span class='class_selector'>$1$2</span> {").
  replace(/(.*):(.*);/gm, "<span class='property'>$1</span>:<span class='value'>$2</span>;").
  replace(/\n/gm, "<br>").
  replace(/<\s*style[^>]*>/gm,"").
  replace(/<\/style>/gm,"");
};

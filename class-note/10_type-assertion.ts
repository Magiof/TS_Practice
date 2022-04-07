// 타입 단언(type assertion)
var b;
b = 20;
b = "a";
var c = b as string;

// DOM API 조작
// <div id="app">hi</div>

var div = document.querySelector("div");
if (div) {
  div.innerText;
}

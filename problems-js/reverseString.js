//  1. reverse the given string
// inbuild method

function reverseStr(str) {
  return console.log(str.split("").reverse().join(""));
}

let str = "hello word!";

reverseStr(str);

// 2.loop method

function revStr(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return console.log(reverse);
}

revStr(str);

//  Every first letter should be uppercase
// "HELLO WORLD" --> "Hello World"
// "this is a tea pot" --> "This Is A Tea Pot"

let str = "this is a tea pot";

function titleCase(str) {
  const words = str.toLowerCase().split(" ");

  for (let word of words) {
    word = word[0].toUpperCase() + word.slice(1);
  }

  return console.log(words.join(" "));
}

titleCase(str);

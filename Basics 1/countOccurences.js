// count how many same characters present

function count(str, char) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      arr.push(str[i]);
      count++;
    }
  }

  return console.log(arr, count);
}

count("hello World!", "l");

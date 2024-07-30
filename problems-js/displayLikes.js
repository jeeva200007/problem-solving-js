function displayLikes(names) {
  const length = names.length;

  if (length === 0) {
    return "No one likes this";
  } else if (length === 1) {
    return `${names[0]} likes this.`;
  } else if (length === 2) {
    return `${names[0]} and ${names[1]} likes this.`;
  } else {
    return `${names[0]}, ${names[1]} and ${length - 2} likes this`;
  }
}

console.log(displayLikes(["jeeva", "vijay", "karthik"]));

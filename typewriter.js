const sentence = "hello there from lighthouse labs";
let delay = 0;

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    // print the current character
    process.stdout.write(sentence[i]);
    //check if the current character is the last character of the sentence
    if (i === sentence.length - 1) {
      //print new line
      console.log("\n");
    }
  }, delay);
  // incread delay by 50ms for each iteration
  delay = delay + 50;
};



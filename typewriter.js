const sentence = "hello there from lighthouse labs \n";

// for (const char of sentence) {
//   process.stdout.write(char);
// }


let x = 0
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, x);
  x += 50;
}



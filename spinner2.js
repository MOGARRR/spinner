const animationParts = ['|','/ ','-','\\ ','|','/ ','-','\\ ','|'];
let time = 100;
for(const item of animationParts) {
  setTimeout(() => {
    process.stdout.write(`\r${item}`);
  },time);
  time += 200;
}

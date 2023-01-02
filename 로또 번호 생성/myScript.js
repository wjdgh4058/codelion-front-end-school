let num = 0;
let lotto = [];

/* for (let i = 0; i < 6; i++) {
  num = parseInt(Math.random() * 45 + 1);
  if (lotto.indexOf(num) == -1) {
    lotto.push(num);
  }
} */

while (lotto.length < 6) {
  num = parseInt(Math.random() * 45 + 1);
  if (lotto.indexOf(num) == -1) {
    lotto.push(num);
  }
}

// document.write(lotto.sort((a, b) => a - b));

lotto.sort((a, b) => a - b);

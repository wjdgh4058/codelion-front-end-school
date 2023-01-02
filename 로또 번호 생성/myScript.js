let num = 0;
let balls = [];

for (let i = 0; i < 6; i++) {
  num = parseInt(Math.random() * 45 + 1);
  balls.push(num);
}

document.write(balls);

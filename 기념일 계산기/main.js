let now = new Date();

// 사귄 일수
let start = new Date("2021-09-21");
let timeDiff = now.getTime() - start.getTime();
let day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
$("#love").text(`${day}일째`);

// 발렌타인 데이
let valentine = new Date("2023-02-14");
let timeDiff2 = valentine.getTime() - now.getTime();
let day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24) + 1);
$("#valentine").text(`${day2}일 남음`);

// 1000일
let ms = start.getTime() + 999 * (1000 * 60 * 60 * 24);
let thousand = new Date(ms);
let thousandDate =
  thousand.getFullYear() +
  "." +
  (thousand.getMonth() + 1) +
  "." +
  thousand.getDate();
$("#thousand-date").text(thousandDate);
let timeDiff3 = thousand.getTime() - now.getTime();
let day3 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
$("#thousand").text(`${day3}일 남음`);

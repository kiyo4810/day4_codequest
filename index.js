/* https://codequest.work/javascript-practice-problems-beginner/
を使っての練習
*/
// Q1
"use strict";
const message = "Hello, JavaScript!";
console.log(message);
document.getElementById("message").innerText = message;
// Q2
let suuji1 = 3;
let suuji2 = 4;
console.log(suuji1 + suuji2);
document.getElementById("plus").innerText = suuji1 + suuji2;
console.log(suuji1 - suuji2);
document.getElementById("minus").innerText = suuji1 - suuji2;
console.log(suuji1 * suuji2);
document.getElementById("multiple").innerText = suuji1 * suuji2;
console.log(suuji1 / suuji2);
document.getElementById("divide").innerText = suuji1 / suuji2;
console.log(suuji1 % suuji2);
document.getElementById("amari").innerText = suuji1 % suuji2;
console.log(suuji1 & suuji2);
document.getElementById("ando").innerText = suuji1 & suuji2;
//コンソールはまとめて表示もできる。
console.log(
  suuji1 + suuji2,
  suuji1 - suuji2,
  suuji1 * suuji2,
  suuji1 / suuji2,
  suuji1 % suuji2,
  suuji1 & suuji2
);
document.getElementById("calAll").innerText =
  suuji1 + suuji2 + "と" + (suuji1 - suuji2) + "とその他計算結果";

//Q3
const num = 5;
const text = "Javascript";
console.log(typeof num);
console.log(typeof text);
console.log(typeof num, typeof text);

document.getElementById("num").innerText = typeof num;
document.getElementById("text").innerText = typeof text;
document.getElementById("num_and_text").innerText = typeof num + typeof text;

//Q4
let yourScore = 79;
document.getElementById("yrscr").innerText = yourScore;

if (yourScore >= 80) {
  console.log("合格");
  document.getElementById("okornot").innerText = "合格";
} else {
  console.log("不合格");
  document.getElementById("okornot").innerText = "不合格";
}
//Q5
//「1から5までの数値を順に表示してください。」
//条件が成立している（True）の間だけはこのループを走る
const q5Area = document.getElementById("q5-area");
for (let i = 1; i <= 5; i++) {
  const newLine = document.createElement("div");
  newLine.id = "1to5_" + i;
  newLine.innerText = i + " 回目のループ";
  q5Area.appendChild(newLine); // 専用の箱の中に入れる
}
//Q6
let fruits = ["apple", "banana", "grape"];
console.log(fruits);
// 1. 修正したID「fruitarray」で親玉を捕まえます
const fruitContainer = document.getElementById("fruitarray");

// 2. フルーツの数だけループ
//fruits.length のlengthは後ろにカッコがないのでプロパティ
for (let i = 0; i < fruits.length; i++) {
  // 3. 新しい div を作成
  const fruitDiv = document.createElement("div");
  // 4. IDを "fruit_1", "fruit_2"... と設定
  fruitDiv.id = "fruit_" + (i + 1);
  // 5. 中身にフルーツ名を入れる
  fruitDiv.innerText = fruits[i];
  // 6. 親玉（fruitarray）の中に追加
  fruitContainer.appendChild(fruitDiv);
}

//Q7 「引数に渡した数値を2倍にして返す関数 double を作成してください。」

let orinum = "33";
function double(num) {
  return num * 2;
}
let resultnum = double(orinum);
console.log(resultnum);
document.getElementById("resnum").innerText = resultnum;

//Q8 「数値が奇数なら “奇数”、偶数なら “偶数” と表示してください。」

let theNum = "24";
let result;
if (theNum % 2 === 0) {
  result = "偶数";
} else {
  result = "奇数";
}

console.log(result);
console.log("そうか、コンソールログにメモ的に直テキストを書いてもいいんだな");

document.getElementById("od_or_ev").innerText = result;

//Q9 while文
let i = 1;
// 1. 修正したID「loop」で親玉を捕まえます
const loopcontainer = document.getElementById("loop");
while (i <= 5) {
  console.log(i);
  // 3. 新しい div を作成
  const loopDiv = document.createElement("div");
  // 4. IDを "loop_1", "loop_2"... と設定
  loopDiv.id = "loop_" + i;
  // 5. 中身にループ回数を入れる
  loopDiv.innerText = "LOOPが" + i + "回";
  // 6. 親玉（loop）の中に追加
  loopcontainer.appendChild(loopDiv);
  i++;
}
let i2 = 100;
const container = document.getElementById("cdto100");
while (i2 >= 0) {
  console.log(i2);
  //新しい行を作る
  const newLine = document.createElement("div");
  newLine.id = "count" + i2;
  newLine.innerText = "ループ" + i2 + "回目です";
  container.appendChild(newLine);
  i2--;
}
//10. 配列のループ処理
let numbers = ["りす", "うさぎ", "しか", "くま", "つきのわ"];
numbers.forEach((num) => console.log(num));

// 1. 書き込む場所（親玉）を捕まえます
const container2 = document.getElementById("arraytoloop");

// 2. forEachを使って、1匹ずつ処理します
numbers.forEach((num) => {
  // コンソールに出す（今まで通り）
  console.log(num);
  // --- ここからHTMLへの書き出し ---
  // 3. 新しい div を作る
  const animalDiv = document.createElement("div");
  // 4. 中身に動物の名前を入れる
  animalDiv.innerText = num;
  // 5. 親玉（arraytoloop）の中に追加する
  container2.appendChild(animalDiv);
});
//11. 三項演算子
let age = 52;
console.log(age >= 50 ? "おじ" : "若手");
const container3 = document.getElementById("3kou");
const ojiwakateDiv = document.createElement("div");
ojiwakateDiv.innerText = age >= 50 ? "おじ" : "若手";
container3.appendChild(ojiwakateDiv);

//12. 配列から最大値を探す
let numarray = [3, 4, 56, 7, 43, 25, 44, 67];
// ... をつけることで、配列の中身をバラバラにして渡せます！
console.log(Math.max(...numarray));
const container4 = document.getElementById("mathmax");
const maxnumDiv = document.createElement("div");
// ... をつけることで、配列の中身をバラバラにして渡せます！
maxnumDiv.innerText = Math.max(...numarray);
container4.appendChild(maxnumDiv);

//「オブジェクト person に name と age を追加し、表示してください。」
//オブジェクトを作るときは{}を使うよ
let person = { nameP: "山田", ageP: 65 };
console.log(person);
console.log(person.nameP);
const container5 = document.getElementById("useobj");
const personDiv = document.createElement("div");
personDiv.innerText(person.nameP);
container5.appendChild(personDiv);

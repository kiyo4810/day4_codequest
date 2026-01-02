/* https://codequest.work/javascript-practice-problems-beginner/
を使っての練習
*/
// Q1
'use strict';
const message = 'Hello, JavaScript!';
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
console.log(suuji1 + suuji2, suuji1 - suuji2, suuji1 * suuji2, suuji1 / suuji2, suuji1 % suuji2, suuji1 & suuji2);
document.getElementById("calAll").innerText = (suuji1 + suuji2) + "と" + (suuji1 - suuji2) + "とその他計算結果";



//Q3
const num=5;
const text="Javascript";
console.log(typeof num);
console.log(typeof text);
console.log(typeof num, typeof text);

document.getElementById("num").innerText = typeof num;
document.getElementById("text").innerText = typeof text;
document.getElementById("num_and_text").innerText = (typeof num)+(typeof text);

//Q4
let yourScore = 79;
document.getElementById("yrscr").innerText = yourScore;

if (yourScore >=80) {
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
let fruits = ["apple","banana","grape"];
console.log(fruits);
// 1. 修正したID「fruitarray」で親玉を捕まえます
const fruitContainer = document.getElementById("fruitarray");

// 2. フルーツの数だけループ
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
function double(num){
    return num *2;
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
document.getElementById("od_or_ev").innerText =result;


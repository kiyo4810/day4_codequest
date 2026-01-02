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

//「1から5までの数値を順に表示してください。」
for (let index = 0; 5; index++) {
    console.log(index);
}

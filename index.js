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

//Q3
const num=5;
const text="Javascript";
console.log(typeof num);
console.log(typeof text);
document.getElementById("num").innerText = typeof num;
document.getElementById("text").innerText =typeof text;


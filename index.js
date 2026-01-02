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
//条件が成立している（True）の間だけはこのループを走る
// 1. まず、表示先の「親玉（入れ物）」を一度だけ捕まえます
const container = document.getElementById("1to5");
for(let i=1; i<=5; i++){
    console.log(i);
// 2. 新しい「div」というお皿（要素）をメモリの中に作成します
    const newLine = document.createElement("div");
    // 3. そのお皿に、今の数字「i」を書き込みます
    newLine.innerText = i + " 行目です";
    // 4. 親玉（container）の中に、今作ったお皿を追加します（配膳！）
    container.appendChild(newLine);
}

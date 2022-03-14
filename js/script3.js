
let a = 20; //width
let b = 30;//height
let x = (a + b) * 2;
let y = a * b;

console.log(x);
console.log(y);

let chuvi = `<b> ${x} <b>`;
let dientich = `<b> ${y} <b>`;

document.getElementById("chuvi").innerHTML = chuvi;
document.getElementById("dientich").innerHTML = dientich;

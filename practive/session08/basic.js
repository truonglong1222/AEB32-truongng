let a = 2;
let b = 6;
console.log(a + b);

let c = a + b;
a += 1; //a= a+1
b -= 2; //b= b-2
console.log(a);
console.log(b);

if (a > b) {
  console.log("a lớn hơn b");
} else {
  console.log("b lớn hơn a");
}
let x = 1;
let y = "1";
// if (x === y) {
//   console.log("x=y");
// } else {
//   console.log("x & y khong bang nhau");
// }
x === y ? console.log("x=y") : console.log("x!=y");

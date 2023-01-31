// 📌  L-Task: String bolib kelgan argumentni ichidagi sonni hisoblab javobini butun qilib return qilsin. Masalan: Calculate("1+1") return qilsin 2, calculate("4*5") return qilsin 20.
function calculate(number) {
  let res = eval(number);
  return Math.floor(res);
}
const wor = calculate("60/12");
console.log(wor);

// console.log("train ishga tushdi");

// const { Schema } = require("mongoose");

// const FootBallPoints = (wins, draws, losse) => {
//   return `${wins * 3 + draws * 1 + losse * 0} `;
// };
// const res = FootBallPoints(3, 4, 2);
// console.log(res);

// const FootBallPoints = (a, b, c) => {
//   if (a="Number"){
//     return a
//   }
// };
// const res = FootBallPoints(3, 4, 2);
// console.log(res);
// / const func = (a, b, c) => {

// const func = (a, b, c) => {
//   if (b == "/" && c == 0) {
//     return "not valid to operate'";
//   } else if (b == "+") {
//     return a + c;
//   } else if (b == "-") {
//     return a - c;
//   } else if (b == "*") {
//     return a * c;
//   } else if (b == "/") {
//     return a / c;
//   }
// };
// const war = func("5+5");
// console.log(war);

// 📌  M-Task: shunday Member class tuzing, uning bir private counts nomli state bolsin, hamda bu classni 3ta methodlari bolsin, ular addMember, removeMember, inform.

// 📩 New message from group :

// 📌  Masalan: member.addMember(5) hech qanday log chiqmasin, member.removeMember(2) bunda ham log kerakmas va member.inform() bizga memberlar soni 3ta chiqarsin.

class Member {
  #counts;

  constructor(counts) {
    this.#counts = counts;
  }

  addMember(amount) {
    this.#counts += amount;
  }

  removeMember(lorem) {
    this.#counts -= lorem;
  }

  inform() {
    console.log(this.#counts);
  }
}

const Walter = new Member(0);
// Walter.inform();
// Walter.addMember();
Walter.addMember(6);
Walter.removeMember(3);

Walter.inform();

// 📌  L-Task: String bolib kelgan argumentni ichidagi sonni hisoblab javobini butun qilib return qilsin. Masalan: Calculate("1+1") return qilsin 2, calculate("4*5") return qilsin 20.
// function calculate(number) {
//   let res = eval(number);
//   return Math.floor(res);
// }
// const wor = calculate("60/12");
// console.log(wor);

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

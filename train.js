console.log("train ishga tushdi");

const FootBallPoints = (wins, draws, losse) => {
  return `${wins * 3 + draws * 1 + losse * 0} `;
};
const res = FootBallPoints(3, 4, 2);
console.log(res);

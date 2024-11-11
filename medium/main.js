// 1) Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
function myPow(x, num) {
  if (num === 0) return 1;
  let res = 1;
  if (num < 0) {
    x = 1 / x;
    num = -num;
  }
  for (let i = num; i > 0; i = Math.floor(i / 2)) {
    if (i % 2 === 1) {
      res *= x;
    }
    x *= x;
  }

  return res;
}
console.log(myPow(2, 10));

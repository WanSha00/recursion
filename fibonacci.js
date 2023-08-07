function fib(n) {
  let a = [0, 1];

  if (n < 1) return "Positive integer only";

  if (n === 1) {
    a = [0];
    return a;
  }

  if (n == 2) return a;

  //fib 5
  //0,1,1,2,3
  // a[2] = a[0] + a[1];
  // a[3] = a[1] + a[2];
  // a[4] = a[2] + a[3];

  for (let i = 2; i < n; i++) {
    a[i] = a[i - 1] + a[i - 2];
  }

  return a;
}

const fibRecursive = (n, a = [0, 1]) => {
  if (n < 1) return "Positive integer only";

  if (n === 1) {
    a = [0];
    return a;
  }

  //when reached length, stop
  if (a.length >= n) return a;

  //add new number at the end of array
  return fibRecursive(n, [...a, a[a.length - 1] + a[a.length - 2]]);
};

console.log("fibonacci 4 : " + fib(4));
console.log("fibonacci 0 : " + fibRecursive(0));
console.log("fibonacci 1 : " + fibRecursive(1));
console.log("fibonacci 2 : " + fibRecursive(2));
console.log("fibonacci 3 : " + fibRecursive(3));
console.log("fibonacci 8 : " + fibRecursive(8));

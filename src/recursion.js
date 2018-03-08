// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 1 || n === 2) return 1;

  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) return 1;

  return n * nFactorial(n - 1);
};

/* Extra Credit */

const getAllLeaves = (obj) => {
  return Object.values(obj).reduce((leaves, leaf) => {
    if (typeof leaf === 'object') {
      return [...leaves, ...getAllLeaves(leaf)];
    }

    return [...leaves, leaf];
  }, []);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  const leaves = getAllLeaves(obj);
  return getAllLeaves(obj).every(leaf => leaf === leaves[0]);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};

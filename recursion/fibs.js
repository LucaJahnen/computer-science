const fibs = (n) => {
  const result = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    result.push(result[i] + result[i + 1]);
  }

  return result;
};

const fibsRec = (n) => {
  const helper = (j) => {
    if (j === 0) {
      return 0;
    } else if (j === 1) {
      return 1;
    } else {
      return helper(j - 2) + helper(j - 1);
    }
  };

  const result = [];
  for (i = 0; i < n; i++) {
    result.push(helper(i));
  }

  return result;
};

console.log(fibs(8)); // [0, 1, 1,  2, 3, 5, 8, 13]
console.log(fibsRec(8)); // [0, 1, 1,  2, 3, 5, 8, 13]

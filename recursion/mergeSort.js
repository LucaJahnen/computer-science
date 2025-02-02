// divide
// sort
// merge

const merge = (a, b) => {
  const c = [];
  let ai = 0;
  let bi = 0;

  while (ai < a.length && bi < b.length) {
    if (a[ai] < b[bi]) {
      c.push(a[ai]);
      ai++;
    } else {
      c.push(b[bi]);
      bi++;
    }
  }

  if (ai < a.length) {
    return [...c, ...a.slice(ai)];
  } else if (bi < b.length) {
    return [...c, ...b.slice(bi)];
  } else {
    return c;
  }
};

const mergeSort = (a) => {
  if (a.length === 1) {
    return a;
  } else {
    const index = Math.floor(a.length / 2);
    const second = [];
    const third = [];

    for (let i = 0; i < index; i++) {
      second.push(a[i]);
    }

    for (let i = index; i < a.length; i++) {
      third.push(a[i]);
    }

    return merge(mergeSort(second), mergeSort(third));
  }
};

console.log(mergeSort([4, 2, 3, 7, 0, 5, 1, 8])); // [0, 1, 2, 3, 4, 5, 7, 8]
console.log(mergeSort([60, 4, 321, 9000, 54, 90, 3])); // [3,  4,  54, 60, 90, 321, 9000]

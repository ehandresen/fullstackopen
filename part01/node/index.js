const array = [1, 2, 3, 4];

const arr2 = array.concat(10, 11, 100);

const x = array.forEach(function (x, index, array) {
  //   console.log(array);
});

// const newArray = array.map((number) => number * 100);

const [first, ...rest] = array;
console.log(rest);

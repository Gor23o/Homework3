//  Task 1. Given an array of numbers which is almost sorted in ascending order.  Find the index
// where sorting order is violated.

let arr = [2, 12, 15, 99, 64];

function arrAscOrdViolated(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      result = i + 1;
      break;
    }
  }
  return result;
}
console.log(arrAscOrdViolated(arr));

// Task 2. Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array.

let arr = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];
let sum = 0;
let rowSum = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
  rowSum.push(sum);
  sum = 0;
}
console.log(rowSum);

// Task 3. Given an array of integers. Write a function that return new array from first array,
// where removed even numbers, and odd numbers was multiplied with new array length.

let arr = [5, 4, 78, 0, -3, 7];

function oddLengthMultiply(arr) {
  let odds = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odds.push(arr[i]);
    }
  }
  for (let j = 0; j < odds.length; j++) {
    odds[j] = odds[j] * odds.length;
  }
  return odds;
}
console.log(oddLengthMultiply(arr));

// Task 4. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced
// elements starting from a to b spaced by step.

function arrEvenlySpaced(a,b,step){
  let arr = [];
  for(let i = a; i <= b; i += step){
    arr.push(i);
  }
  return arr;
}
  console.log(arrEvenlySpaced(1,5,1))

// Task 5. Given an array of numbers. Print frequency of each unique number. (Frequency is the
// count of particular element divided by the count of all elements).

const arr = [1, 1, 2, 2, 3];
const counts = {};

for (let i = 0; i < arr.length; i++) {
  const number = arr[i];
  if (number in counts) {
    counts[number]++;
  } else {
    counts[number] = 1;
  }
}

for (const [number, count] of Object.entries(counts)) {
  const frequency = count / arr.length;
  console.log(`${number}: ${frequency.toFixed(1)}`);
}

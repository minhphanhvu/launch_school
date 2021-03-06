// Cute Angles

function dms(angle) {
  let [degrees, minutes] = String(angle).split('.');
  minutes = Number('.' + minutes) * 60 || '00';

  let seconds;
  [minutes, seconds] = String(minutes).split('.');
  seconds = Number('.' + seconds) * 60 || '00';

  minutes = leadingZero(minutes);
  seconds = leadingZero(String(seconds).split('.')[0]);

  return `${degrees}°${minutes}'${seconds}"`;
}

function leadingZero(numStr) {
  return numStr.length < 2 ? `0${numStr}` : numStr;
}

console.log('Cute Angles');
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

// Union

function union(arr1, arr2) {
  const newArr = [...arr1];

  arr2.forEach(value => {
    if (!newArr.includes(value)) {
      newArr.push(value);
    }
  });

  return newArr;
}

console.log('Union');
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

// Halvsies

function halvsies(array) {
  const half = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(half);

  return [firstHalf, secondHalf];
}

console.log('Halvsies');
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

// Find the Duplicate

function findDup(array) {
  const seen = {};

  for (let i = 0; i < array.length; i += 1) {
    if (seen[array[i]]) {
      return array[i];
    } else {
      seen[array[i]] = true;
    }
  }

  return undefined;
}

console.log('Find the Duplicate');
console.log(findDup([1, 5, 3, 1]));  // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
  7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));  // 73

// Combine Two Lists

function interleave(arr1, arr2) {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }

  return newArr;
}

console.log('Combine Two Lists');
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// Multiplicative Average

function showMultiplicativeAverage(arr) {
  let result = arr.reduce( (multiplication, currentValue) => multiplication * currentValue, 1 )/arr.length;
  return result.toFixed(3);
}

console.log('Multiplicative Average');
console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

// Multiply Lists

function multiplyList(numbers1, numbers2) {
  const result = [];

  for (let i = 0; i < numbers1.length; i += 1) {
    result.push(numbers1[i] * numbers2[i]);
  }

  return result;
}

console.log('Multiply Lists');
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

// Digit List

function digitList(num) {
  let numArr = String(num).split('');
  let result = [];

  for (let i = 0; i < numArr.length; i++) {
    result.push(Number(numArr[i]));
  }

  return result;
}

console.log('Digist List');
console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

// Array Average

function average(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return Math.floor(sum / numbers.length);
}

console.log('Array Average');
console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
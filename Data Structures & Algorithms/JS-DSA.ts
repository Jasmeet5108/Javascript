// Finding Largest and Second largest number in an array
const arr1 = [34, 22, 625, 183, 1, 35, 67, 77, 24, 21, 121, 100];
let largest = 0;
let second_largest = 0;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > largest) {
    second_largest = largest;
    largest = arr1[i];
  } else if (arr1[i] > second_largest && arr1[i] < largest) {
    second_largest = arr1[i];
  }
}
console.log(`Largest Number is ${largest}`);
console.log(`Second Largest Number is ${second_largest}`);

// Second largest Number using a function. Handling in case all numbers are same
const arr2 = [12, 35, 1, 10, 35, 1];
let largestNum: number = -Infinity;
let secondLar: number = -Infinity;
function getSecond(arr: typeof arr2): string | number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      secondLar = largestNum;
      largestNum = arr[i];
    } else if (arr[i] > secondLar && arr[i] < largest) {
      secondLar = arr[i];
    }
  }
  return secondLar === -Infinity ? "No Second largest number" : secondLar;
}
const result = getSecond(arr2);
console.log(result);

// Finding Smallest and Second Smallest number in an array
const arr3 = [34, 22, 625, 183, 1, 35, 67, 77, 24, 21, 121, 100];
let smallest = Infinity;
let second_smallest = Infinity;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] < smallest) {
    second_smallest = smallest;
    smallest = arr3[i];
  } else if (arr3[i] > smallest && arr3[i] < second_smallest) {
    second_smallest = arr3[i];
  }
}
console.log(`Smallest Number is ${smallest}`);
console.log(`Second Smallest Number is ${second_smallest}`);

// finding the highest occuring number and number of times it has occured
const arr4 = [34, 22, 625, 183, 1, 34, 67, 77, 24, 21, 121, 100];
let frequency = {};
arr4.forEach((num) => (frequency[num] = (frequency[num] || 0) + 1));
let maxOccur = 0;
let numOfTimes = 0;
for (const num in frequency) {
  if (Object.prototype.hasOwnProperty.call(frequency, num)) {
    if (frequency[num] > numOfTimes) {
      numOfTimes = frequency[num];
      maxOccur = Number(num);
    }
  }
}

console.log(
  `Max Occuring number is ${maxOccur} and it has occured ${numOfTimes} times`
);

// Finding Even and Odd numbers
const arr5 = [34, 22, 625, 183, 1, 34, 67, 77, 24, 21, 121, 101];
let evenNumbers: number[] = [];
let oddNumbers: number[] = [];
arr5.forEach((num) =>
  num % 2 == 0 ? evenNumbers.push(num) : oddNumbers.push(num)
);

console.log(evenNumbers);
console.log(oddNumbers);

// Highest product of 2 different numbers in an array
const arr6 = [1, 20, 3, 10, 5];
let highestProduct = 0;
for (let i = 0; i < arr6.length; i++) {
  let oneNum = arr6[i];
  let product: number;
  for (let j = i + 1; j < arr6.length; j++) {
    product = oneNum * arr6[j];
    if (product > highestProduct) {
      highestProduct = product;
    }
  }
}

console.log(highestProduct);

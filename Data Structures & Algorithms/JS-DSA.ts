// Second largest Number using a function. Handling in case all numbers are same
const arr1 = [12, 35, 1, 10, 35, 1];
function getSecondLargestNum(arr: number[]): string | number[] {
  let largestNum: number = -Infinity;
  let secondLar: number = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      secondLar = largestNum;
      largestNum = arr[i];
    } else if (arr[i] > secondLar && arr[i] < largestNum) {
      secondLar = arr[i];
    }
  }
  return secondLar === -Infinity
    ? "No Second largest number"
    : [largestNum, secondLar];
}
const [largest, secondLar] = getSecondLargestNum(arr1);
console.log(secondLar);

// Finding Smallest and Second Smallest number in an array
const arr2 = [34, 22, 625, 183, 1, 35, 14, 67, 77, 24, 21, 121, 100];
function getSecondSmallestNum(arr: number[]): string | number[] {
  let smallest = Infinity;
  let second_smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      second_smallest = smallest;
      smallest = arr[i];
    } else if (arr[i] > smallest && arr[i] < second_smallest) {
      second_smallest = arr[i];
    }
  }
  return second_smallest === Infinity
    ? "No Second smallest number"
    : [smallest, second_smallest];
}

const [smallest, second_smallest] = getSecondSmallestNum(arr2);
console.log(second_smallest);

// finding the highest occuring number and number of times it has occured
const arr3 = [34, 22, 625, 183, 1, 34, 67, 77, 24, 21, 121, 100];

function highestOccuringNumber(arr: number[]): number[] {
  let frequency = {};
  arr.forEach((num) => (frequency[num] = (frequency[num] || 0) + 1));
  let maxOccur = 0;
  let numOfTimes: number = 0;
  for (const num in frequency) {
    if (Object.prototype.hasOwnProperty.call(frequency, num)) {
      if (frequency[num] > maxOccur) {
        numOfTimes = frequency[num];
        maxOccur = Number(num);
      }
    }
  }
  return [maxOccur, numOfTimes];
}

const [maxOccur, numOfTimes] = highestOccuringNumber(arr3);

console.log(
  `Max Occuring number is ${maxOccur} and it has occured ${numOfTimes} times`
);

// Finding Even and Odd numbers
const arr4 = [34, 22, 625, 183, 1, 34, 67, 77, 24, 21, 121, 101];
function separateEvenAndOddNums(arr: number[]): number[][] {
  let evenNumbers: number[] = [];
  let oddNumbers: number[] = [];
  arr.forEach((num) =>
    num % 2 == 0 ? evenNumbers.push(num) : oddNumbers.push(num)
  );
  return [evenNumbers, oddNumbers];
}

const [evenNumbers, oddNumbers] = separateEvenAndOddNums(arr4);

console.log(evenNumbers);
console.log(oddNumbers);

// Highest product of 2 different numbers in an array
const arr5 = [1, 20, 3, 10, 5];
function highestProductOfTwoNums(arr: number[]): number {
  let highestProduct = 0;
  for (let i = 0; i < arr.length; i++) {
    let oneNum = arr[i];
    let product: number;
    for (let j = i + 1; j < arr.length; j++) {
      product = oneNum * arr[j];
      if (product > highestProduct) {
        highestProduct = product;
      }
    }
  }
  return highestProduct;
}

const highestProduct = highestProductOfTwoNums(arr5);

console.log(highestProduct);

// Add a new item to a specific position in Array
const arr6 = [22, 45, 32, 12, 34, 55, 42];

function addNewVal(arr: number[], newVal: number, pos: number): number[] {
  for (let i = arr.length - 1; i > 0; i--) {
    if (i >= pos) {
      arr[i + 1] = arr[i];
      if (i === pos) {
        arr[pos] = newVal;
      }
    }
  }
  return arr;
}
const newArr = addNewVal(arr6, 1000, 3);
console.log(newArr);

// Remove a specific positioned element from Array
const arr7 = [22, 45, 32, 12, 34, 55, 42];
function removeElem(arr: number[], pos: number): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    if (i >= pos) {
      arr[i] = arr[i + 1];
    }
  }
  arr.pop();
  return arr;
}
const newArr2 = removeElem(arr7, 5);
console.log(newArr2);

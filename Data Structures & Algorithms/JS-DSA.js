// Finding Largest and Second largest number in an array
const arr = [34, 22, 625, 183, 1, 35, 67, 77, 24, 21, 121, 100]
let largest = 0;
let second_largest = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        second_largest = largest
        largest = arr[i]
    }
    else if (arr[i] > second_largest && arr[i] < largest) {
        second_largest = arr[i];
    }
}
console.log(`Largest Number is ${largest}`)
console.log(`Second Largest Number is ${second_largest}`)


// Finding Smallest and Second Smallest number in an array
const arr2 = [34, 22, 625, 183, 1, 35, 67, 77, 24, 21, 121, 100]
let smallest = Infinity
let second_smallest = Infinity
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < smallest) {
        smallest = arr2[i]
    }
    else if (arr2[i] > smallest && arr2[i] < second_smallest) {
        second_smallest = arr2[i]
    }
}
console.log(`Smallest Number is ${smallest}`)
console.log(`Second Smallest Number is ${second_smallest}`)


// finding the highest occuring number and number of times it has occured
const arr3 = [34, 22, 625, 183, 1, 34, 67, 77, 24, 21, 121, 100]
let frequency = {};
arr3.forEach(num => frequency[num] = (frequency[num] || 0) + 1)

let maxOccur = 0;
let numOfTimes = null;

for (const num in frequency) {
    if (Object.prototype.hasOwnProperty.call(frequency, num)) {
        if (frequency[num] > maxOccur) {
            numOfTimes = frequency[num]
            maxOccur = num
        }
    }
}

console.log(`Max Occuring number is ${maxOccur} and it has occured ${numOfTimes} times`)


// Finding Even and Odd numbers
const arr4 = [34, 22, 625, 183, 1, 34, 67, 77, 24, 21, 121, 101]

let evenNumbers = []
let oddNumbers = []

arr4.forEach(num => num % 2 == 0 ? evenNumbers.push(num) : oddNumbers.push(num))

console.log(evenNumbers)
console.log(oddNumbers)
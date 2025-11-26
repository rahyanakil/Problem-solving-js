//? Input
//[2,11,7,15] and 9

//? Output
//[0,2] (because 2+7=9)

const twoSum = (arr, target) => {
  const numMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    console.log(`currentNumber: ${currentNumber}`);

    const complement = target - currentNumber;
    // console.log(`complement: ${complement}`);
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(currentNumber, i);
    console.log(numMap);
  }
  return [];
};

console.log(twoSum([2, 11, 7, 15], 9));

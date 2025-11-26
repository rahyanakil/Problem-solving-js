//? Input and Output
//"A man, a plan, a canal: Panama" ==> true
// laval ==>true
//"car" ==> false

const isPalindrome1 = (str) => {
  //step1: Clean the string1 and convert to lowerCase
  const cleanedString = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  //step 2: Initialize pointers for start to end
  let left = 0;
  let right = cleanedString.length - 1;
  //step 3: loop through the string and compare the words
  if (cleanedString.length === 0)
    return {
      message: "String is khali",
    };
  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome1(""));

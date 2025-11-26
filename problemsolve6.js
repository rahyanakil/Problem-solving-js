import Stack from "./Stack.js";

const bracketChecker = (str) => {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.isEmpty(")" || "}" || "]")) {
        return {
          message: "Unmatched closing bracket found",
          inValid: false,
        };
      }
    }
  }
  return true;
};

console.log(bracketChecker("})[]{}"));

// Generate a lookup table

const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "DS in Js", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "Css Grid Tricks", author: "Alex" },
];

const lookupTable = postsArray.reduce((table, post) => {
  table[post.id] = post;
  return table;
}, {});

//!S const postToFind = postsArray.find((post) => post.id === "p-102");

console.log(postToFind);
// console.log(lookupTable);

// const post = lookupTable["p-103"];
// console.log(lookupTable[post]);

// for (let post in lookupTable) {
//   console.log(lookupTable[post]);
// }

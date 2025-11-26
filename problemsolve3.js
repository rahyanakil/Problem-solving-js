const surveyResponses = [
  "A",
  "B",
  "C",
  "A",
  "B",
  "A",
  "D",
  "A",
  "C",
  "A",
  "B",
  "C",
  "A",
  "B",
  "A",
  "D",
  "A",
  "C",
];

const count = surveyResponses.reduce((table, response) => {
  //   console.log(table);
  //   console.log(response);

  if (table[response]) {
    table[response] = table[response] + 1;
  } else {
    table[response] = 1;
  }
  return table;

  //   console.log(table[response]);
}, {});

console.log(count);

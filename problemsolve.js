// const currentUserRoles = ["user", "editor"];
// const featureAccessRoles = ["user", "manager"];

// const canAccess = currentUserRoles.some((role) =>
//   featureAccessRoles.includes(role)
// );

// console.log(canAccess);

// Number to Array

// const Arr = Array.from({ length: 5 }, (_, i) => i);

// console.log(Arr);

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );

console.log(range(0, 11, 5));

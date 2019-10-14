var person = {
  firstName: "Eduar",
  lastName: "Apaza"
};

Object.defineProperty(person, "age", {
  value: 26,
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(person);

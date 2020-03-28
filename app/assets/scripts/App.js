import css from "../styles/styles.css";

if (module.hot) {
  module.hot.accept();
}
console.log("bundle this js file");

const obj = {
  name: "Ruichi",
  age: 12
};

const people = {
  ...obj,
  gender: "female"
};

console.log(people);

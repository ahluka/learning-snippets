import React from "react";
import logo from "./logo.svg";
import "./App.css";

let name: string;
let age: number | string; // union type
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]; // tuple

// void returns undefined, never returns nothing
let printName: (name: string) => never;

// type Person = {
//   name: string;
//   age?: number; // ? == optional
// };

// let person: Person = {
//   name: "Lee",
// };

// let lotsOfPeople: Person[];

// let personName: unknown; // use instead of any

// interface Person {
//   name: string;
//   age: number;
// }

// type Guy = Person & {
//   profession: string;
// };

function App() {
  return <div className="App">Hello world</div>;
}

export default App;

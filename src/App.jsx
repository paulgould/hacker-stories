import * as React from "react";

const welcome = {
  title: "Reactt",
  greeting: "Hey",
};

const myArray = [10, 20, 30, 40, 50];

function getTitle() {
  return welcome.title;
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;

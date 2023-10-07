import * as React from "react";

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const handleSearch = (event) => {
    console.log(event.target.value);
  };
  // console.log("App renders");
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={stories} />
    </div>
  );
};

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  };
  // console.log("Search renders");
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Search for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

const List = (props) => {
  // console.log("List renders");
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

const Item = (props) => {
  const item = props.item;
  // console.log("Item renders");
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  );
};
export default App;

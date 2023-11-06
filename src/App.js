import { useState, useEffect } from "react";

import CardList from "./componets/card-list/card-list.componet";
import SearchBox from "./componets/search-box/search-box-component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [stringField , setStringField ] = useState('')

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title"> Monsters Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        onChangeHander={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// constructor() {
//   super();

//   this.state = {
//     monster: [],
//     searchField: "",
//   };
// }

// componentDidMount() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(() => {
//         return { monster: users };
//       })
//     );
// }

// render() {
//   const { monster, searchField } = this.state;
//   const { onSearchChange } = this;

// }

export default App;

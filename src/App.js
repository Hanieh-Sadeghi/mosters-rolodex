import { useState, useEffect } from "react";

import CardList from "./componets/card-list/card-list.component";
import SearchBox from "./componets/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHander={onSearchChange}
        placeholder="search monsters"
      />
        <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

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

// export default App;

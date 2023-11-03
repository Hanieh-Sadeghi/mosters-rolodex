import { Component } from "react";

import CardList from "./componets/card-list/card-list.componet";
import SearchBox from "./componets/search-box/search-box-component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monster: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monster, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox
          className="monsters-search-box"
          onChangeHander={onSearchChange}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

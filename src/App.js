import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.jsx";
import { SearchBox } from "./components/searchBox/search-box.jsx";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ monsters: data });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search" handleChange={this.handleChange} />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;

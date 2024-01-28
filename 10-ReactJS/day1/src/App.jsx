import React, { Component } from "react";
import { products } from "./data/products";
import SearchBar from "./components/SearchBar.jsx";
import Fruits from "./components/MainList.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      searchBar: "",
    };
  }

  componentDidMount() {
    const data = products.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    this.setState({ data });
  }

  searchBar = (event) => {
    this.setState({ searchBar: event.target.value });
  };

  deleteCategory = (category) => {
    const { data } = this.state;
    const updatedData = Object.fromEntries(
      Object.entries(data).filter(([key]) => key !== category)
    );
    this.setState({ data: updatedData });
  };

  render() {
    const { data, searchBar } = this.state;

    const filteredData = Object.keys(data).reduce((acc, category) => {
      const filteredProducts = data[category].filter((product) =>
        product.name.toLowerCase().includes(searchBar.toLowerCase())
      );
      if (filteredProducts.length > 0) {
        acc[category] = filteredProducts;
      }
      return acc;
    }, {});

    return (
      <div>
        <div className="container w-80">
          <SearchBar value={searchBar} onChange={this.searchBar} />
          <Fruits
            data={filteredData}
            searchBar={searchBar}
            deleteCategory={this.deleteCategory}
          />
        </div>
      </div>
    );
  }
}

export default App;

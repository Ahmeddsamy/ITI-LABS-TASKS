import React, { Component } from "react";
import Category from "./Categories.jsx";

class Fruits extends Component {
  render() {
    const { data, searchBar, deleteCategory } = this.props;
    console.log(data);
    return (
      <>
        <div className="title d-flex justify-content-between">
          <h1>Name</h1>
          <h1>Price</h1>
        </div>
        {Object.keys(data).map((category) => (
          <Category
            key={category}
            category={category}
            items={data[category]}
            searchBar={searchBar}
            deleteCategory={deleteCategory}
          />
        ))}
      </>
    );
  }
}

export default Fruits;

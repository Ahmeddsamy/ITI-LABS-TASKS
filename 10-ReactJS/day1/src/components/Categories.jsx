import React, { Component } from "react";

class Category extends Component {
  render() {
    const { category, items, searchBar, deleteCategory } = this.props;

    return (
      <div className="list">
        <div className="d-flex justify-content-between">
          <h3>{category}</h3>
          <button
            className="btn btn btn-outline-dark btn-sm"
            onClick={() => deleteCategory(category)}
          >
            Remove
          </button>
        </div>
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchBar.toLowerCase())
          )
          .map((item) => (
            <div
              className="item d-flex justify-content-between"
              key={item.name}
            >
              <h6 className={`${item.stocked !== true && "text-danger"}`}>
                {item.name}
              </h6>
              <h6>{item.price}</h6>
            </div>
          ))}
      </div>
    );
  }
}

export default Category;

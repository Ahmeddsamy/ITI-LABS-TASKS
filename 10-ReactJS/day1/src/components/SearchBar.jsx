import { Component } from "react";

class SearchBar extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="input-group my-3">
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={onChange}
          placeholder="Search for ..."
        />
      </div>
    );
  }
}

export default SearchBar;

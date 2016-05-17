import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="input-group">
          <input type="text"
            value = {this.state.searchTerm}
            onChange={this.onInputChange}
            className="form-control"
            placeholder="Search videos..." />
          <span className="input-group-btn">
            <button className="btn btn-primary"
                    type="button">Search</button>
          </span>
        </div>
      </div>
    )
  }

  onInputChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }
}

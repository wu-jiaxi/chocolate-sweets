// https://www.youtube.com/watch?v=bv3U-Y3fmsA - resourced used

import React from "react";
import axios from "axios";
import "../components/Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };
    this.cancel = "";
  }
  fetchSearchResults = (query) => {
    const searchUrl = `https://api.thedogapi.com/v1/images/search`;

    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        const resultNotFound = !res.data.hints.length
          ? "There are no more search results"
          : "";
        this.setState({
          results: res.data.hints,
          message: resultNotFound,
          loading: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Failed to fetch the data",
          });
        }
      });
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query: query, loading: true, message: "" }, () => {
      this.fetchSearchResults(query);
    });
  };

  addItem = (data) => {
    // you want to grab the items you clicked on
    console.log(data);
  };

  render() {
    const { query } = this.state;
    return (
      <div className="container">
        <h2> Calorie Counter </h2>
        <label className="search-label" htmlFor="search-inout">
          <input
            type="text"
            name="query"
            value={query}
            id="search input"
            placeholder=""
            onChange={this.handleOnInputChange}
            /*  onClick={((e) => this.addItemCalories(e, data))} */
          ></input>
        </label>
        {this.renderSearchResults()}
      </div>
    );
  }
}

export default Search;

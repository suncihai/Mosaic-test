import React from "react";
import { Component } from "react";

import SearchBar from "../containers/search_bar";
import NewsList from "../containers/news_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <NewsList/>
      </div>
    );
  }
}

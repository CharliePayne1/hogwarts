import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

import {imageMap} from './ImagesArray.js'


class App extends Component {
  state = {
    pigs: hogs
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HogContainer pigs={this.state.pigs}/>
      </div>
    );
  }
}

export default App;

import React, { Fragment } from "react";
import Hog from './Hog'


export default class HogContainer extends React.Component {

  // defining state
  state = {
    showGreased: false,
    sortedByName: false,
    sortedByWeight: false,
    selected: null
    }

  //  render pigs
  createPigcard = () => {
    if (this.state.showGreased) {
      return this.props.pigs.filter(pig => pig.greased).map((pig, index) => <Hog key={index} pig={pig} handleSelect={this.handleSelect} select={false}/>)
    } 
    else if (this.state.sortedByName) {
      this.sortedByName()
    }
    else if (this.state.sortedByWeight) {
      this.sortedByWeight()
    }
    return this.props.pigs.map((pig, index) => <Hog key={index} pig={pig} handleSelect={this.handleSelect} select={false}/>)
  }

// sorting methods
  sortedByName = () => {
    return this.props.pigs.sort((a, b) => (a.name > b.name) ? 1 : -1).map((pig, index) => <Hog key={index} pig={pig} handleSelect={this.handleSelect} select={false}/>)
  }

  sortedByWeight = () => {
    return this.props.pigs.sort((a, b) => (a.weight > b.weight) ? 1 : -1).map((pig, index) => <Hog key={index} pig={pig} handleSelect={this.handleSelect} select={false}/>)
  }

  handleGreased = () => {
    this.setState({
      showGreased: !this.state.showGreased
    })
  }

  // handle clicks on sorting methods 
  handleAlphabetical = () => {
    this.setState({
      sortedByName: !this.state.sortedByName
    })
  }

  handleWeight = () => {
    this.setState({
      sortedByWeight: !this.state.sortedByWeight
    })
  }

  handleSelect = (pig) => {
  !this.state.selected ? this.setState({selected: pig}) : this.setState({selected: null})
  }

  // click on a pig to show it's details
  render() {
    if (this.state.selected) {
      return <div>
        <Hog pig={this.state.selected} handleSelect={this.handleSelect} select={true}/>
        </div>
    }
    // show all pigs 
    return (
      <div>
        <h1>Prized Pigs</h1>
        {this.state.showGreased ? 
        <button onClick={this.handleGreased}>Show All</button> :
        <button onClick={this.handleGreased}>Show Greased</button> }
        <br></br>
        <br></br>
        <button onClick={this.handleAlphabetical}>Alphabetical</button>
        <button onClick={this.handleWeight}>Weight</button>
        <br></br> 
        <br></br>
        {this.createPigcard()}
      </div>
    );
  }
}

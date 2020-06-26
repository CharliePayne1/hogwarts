import React from 'react'
// import {imageMap} from './ImagesArray.js'
export default class Hog extends React.Component {

    state = {
      clicked: false
      }

    selectImage = () => {
        const image = require(`../hog-imgs/${this.convertNameToFilename()}.jpg`)
        return image
        // return imageMap[this.props.pig.name]
    }

    convertNameToFilename = () => {
      return this.props.pig.name.toLowerCase().split(' ').join('_')
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

  render() {
      if (this.props.select) {
        return <div onClick={() => this.props.handleSelect(this.props.pig)}>
        <h5>{this.props.pig.name}</h5>
        <p>Specialty: {this.props.pig.specialty}</p>
        <p>Highest Medal Acheived: {this.props.pig['highest medal achieved']}</p>
        <p>Weight {this.props.pig.weight}</p>
        <img src={this.selectImage()}></img>
        </div>
      }
      return (
      <div onClick={() => this.props.handleSelect(this.props.pig)}>
          <h5>{this.props.pig.name}</h5>
          <img src={this.selectImage()}></img>
          <br></br>
          <br></br>
      </div>
    )
}
}
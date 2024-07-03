import React, { Component } from 'react'

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      changeNames: props.head.name
    }
  }
  buttonClick = () => {
    this.props.head.name = "English"
    this.setState({ changeNames: "Body" })
  }
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <h4>Hello World, It's Class component! {this.props.head.name}</h4>
        <button onClick={() => this.buttonClick()}>Click me!</button>
      </div>
    )
  }
}
export default ClassComponent


import React, { Component } from 'react'

class DivThingy extends Component {

    constructor(props){
        super(props);
        this.state ={
            clicks: 0
        }
        this.clickCount = this.clickCount.bind(this);
    }


    clickCount(){
        this.setState({
            clicks: this.state.clicks + 1
        })
        this.props.passTheProps(this.state.clicks);
    }

  render() {
    return (
      <div className="fun-div" onClick={this.clickCount}>
        <h2>Click me, I do things.</h2>
        <h2>{this.state.clicks} times clicked</h2>
      </div>
    )
  }
}

export default DivThingy

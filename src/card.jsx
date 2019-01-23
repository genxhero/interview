import React, { Component } from 'react'

export default class card extends Component {
    constructor(props) {
        super(props);
        this.goLeftMaybe = this.goLeftMaybe.bind(this);
        this.goRightMaybe = this.goRightMaybe.bind(this);
    }

    goLeftMaybe() {
      
        if (this.props.columnid === "col-a") {
            return <div></div>;
        } else {
            return <div className="very-big-arrow"> {`<`} </div>;
        }
    }

    goRightMaybe() {
        if (this.props.columnid === "col-d") {
            return <div></div>;
        } else {
            return <div className="very-big-arrow"> {`>`} </div>;
        }
    }
  render() {
    return (
      <div className="card">
         {this.goLeftMaybe()}
         {this.props.description}
         {this.goRightMaybe()}
      </div>
    )
  }
}

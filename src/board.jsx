import React, { Component } from 'react'
import Card from './card';
import Column from './column';

export default class Board extends Component {
constructor(props){
    super(props);

}
  render() {
    return <div className="board">
        <Column id="col-a" title="George"/>
        <Column id="col-b" title="Bill"/>
        <Column id="col-c" title="Theodore"/>
        <Column id="col-d" title="Robert"/>
      </div>;
  }
}

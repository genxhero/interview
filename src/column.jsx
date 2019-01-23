import React, { Component } from 'react'
import Card from './card';

export default class Column extends Component {
    constructor(props){
        super(props);
        this.title = props.title;
        this.addCard = this.addCard.bind(this)
        this.state = {
            cards: []
        }
    }


    addCard(){
      const input = window.prompt("Please enter a task");
      const newCard = input;
      const newCards = this.state.cards;
      debugger;
      newCards.push(newCard);
      this.setState({
          cards: newCards
      })
    }
  render() {
     
    return (
      <div className="column" id={this.props.id}>
          <h4 className="column-header">{this.title}</h4>
          <Card description="This is a mockup" />
          <Card description="This is also a mockup" />
            {
               this.state.cards.map((card) => {
                   return <Card description={card} columnid={this.props.id}/>
               })
            }
            <button onClick={this.addCard}></button>
      </div>
    )
  }
}

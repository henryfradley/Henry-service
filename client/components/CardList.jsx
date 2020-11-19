import React from 'react';
import Card from './Card.jsx';

let CardList = function(props) {
  let cards = props.cards;
  const cardList = cards.map((card) =>
    <Card key={cards.indexOf(card)} id ={cards.indexOf(card)} card={card} showModal={props.showModal} handleOpenModal={props.handleOpenModal} handleCloseModal={props.handleCloseModal} currentModal={props.currentModal} />
  )

  return (
    <div className="cards">
      {cardList}
    </div>
  )
}


export default CardList;



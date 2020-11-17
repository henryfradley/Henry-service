import React from 'react';
import Card from './Card.jsx';
import ReactModal from 'react-modal';

let CardList = function(props) {

  let cards = props.cards;
  console.log('current modal', props.currentModal)

  const cardList = cards.map((card) =>
    <Card id ={cards.indexOf(card)} card={card} showModal={props.showModal} handleOpenModal={props.handleOpenModal} handleCloseModal={props.handleCloseModal} currentModal={props.currentModal} />
  )

  return (
    <div className="cards">
      {cardList}
    </div>


  )
}


export default CardList;



import React from 'react';
import Card from './Card.jsx';
import ReactModal from 'react-modal';

let CardList = function(props) {

  let cards = props.cards;

  const cardList = cards.map((card) =>
    <Card card={card} showModal={props.showModal} handleOpenModal={props.handleOpenModal} handleCloseModal={props.handleCloseModal}/>
  )

  return (
    <div className="cards">
      {cardList}
    </div>


  )
}


export default CardList;




import React from 'react';
import ReactModal from 'react-modal';
import { CgClose } from "react-icons/cg";
import CardList from './CardList.jsx'






let CardInfo = (props) => {
  return <div className="cardInfo">{props.value}</div>
};


let Card = (props) => {
  const card = props.card;

    const infoCard = card.map((info) =>
      <CardInfo value={info} />
    )

  return (

    <div className="card" id={props.id}>
        {infoCard}
        <br/>
        <br/>
        <button className="moreDetails" onClick={props.handleOpenModal} id={props.id}>More details</button>
        <ReactModal className="modal" isOpen={props.showModal} closeTimeoutMS={500}>
          <button className="x" onClick={props.handleCloseModal}><CgClose size="20px"/></button>
          {props.currentModal}
        </ReactModal>
      </div>
    )
}



export default Card;


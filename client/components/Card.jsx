
import React from 'react';
import ReactModal from 'react-modal';
import { GiTriangleTarget } from "react-icons/gi";
import CardList from './CardList.jsx'





let CardInfo = (props) => {
  return <div className="cardInfo">{props.value}</div>
};


let Card = (props) => {
  const card = props.card;
  console.log(props.id)

    const infoCard = card.map((info) =>
      <CardInfo value={info} />
    )

  return (

    <div className="card" id={props.id}>
        {infoCard}
        <br/>
        <br/>
        <button className="moreDetails" onClick={props.handleOpenModal} id={props.id}>More details</button>
        <ReactModal className="modal" isOpen={props.showModal}>
          <button id={props.id} onClick={props.handleCloseModal}>X</button>
          {props.currentModal}
        </ReactModal>
      </div>
    )
}



export default Card;



import React from 'react';
import ReactModal from 'react-modal';
import { CgClose } from "react-icons/cg";
import CardList from './CardList.jsx'






let CardInfo = (props) => {
  let info = props.value;
  // let grayOut = ['unavailable', 'No']
//   {if (info.contains('No')) {
//     <div className="grayCardInfo">{info}</div>
//   } else {
//     return <div className="cardInfo">{info}</div>
//   }
// }
 return <div className="cardInfo">{props.value}</div>

// return {{props.value.includes}('unavailable' || 'No') ?
//   <div className="grayCardInfo">{props.value}</div>
//   : <div className="cardInfo">{props.value}</div>
// }






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


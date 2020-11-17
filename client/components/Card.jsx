
import React from 'react';
import ReactModal from 'react-modal';
import { GiTriangleTarget } from "react-icons/gi";
import CardList from './CardList.jsx'





let CardInfo = (props) => {
  return <div className="cardInfo">{props.value}</div>
};


let Card = (props) => {
  console.log(props);
  const card = props.card;
  console.log('card', card)

    const infoCard = card.map((info) =>
      <CardInfo value={info} />
    )

  return (
    <div className="card">
        {infoCard}
        <button className="moreDetails" onClick={props.handleOpenModal}>More details</button>
        <ReactModal className="modal" isOpen={props.showModal}>
          <button onClick={props.handleCloseModal}>X</button>
          {infoCard}
        </ReactModal>
      </div>
    )
}



export default Card;


      // <div className="card">
      //   {infoCard}
      //   <button className="moreDetails" onClick={props.handleOpenModal}>More details</button>
      //   <ReactModal className="modal" isOpen={props.showModal}>
      //     <button onClick={props.handleCloseModal}>X</button>
      //     {infoCard}
      //   </ReactModal>
      // </div>







// let Cards = (props) => {
//   let cards = props.cards;
//   let campSiteArea = cards[0];
//   let Amenities = cards[1];
//   let Essentials = cards[2];
//   console.log('csa', campSiteArea)
//   let campSiteCard;
//   if (campSiteArea) {
//     campSiteCard = campSiteArea.map((info) =>
//    <CardInfo value={info} />
//   )
//   }





//   return (
//     <div className="modals">
//       <div className="card" id={cards.indexOf(card)}>
//         {campSiteCard}
//        <button className="moreDetails" onClick={props.handleOpenModal} id={cards.indexOf(card)}>More details</button>
//         <ReactModal className="modal" isOpen={props.showModal}>
//          <button onClick={props.handleCloseModal}>X</button>
//           {infoCard}
//         </ReactModal>
//       </div>



//     </div>
//     )
// }




// let Card = (props) => {

//   let cards = props.cards;
//   let cardList = [];
//   for (var card of cards) {
//     const infoCard = card.map((info) =>
//       <CardInfo value={info} />
//     )
//     cardList.push(
//       <div className="card" id={cards.indexOf(card)}>
//         {infoCard}
//         <button className="moreDetails" onClick={props.handleOpenModal} id={cards.indexOf(card)}>More details</button>
//         <ReactModal className="modal" isOpen={props.showModal}>
//           <button onClick={props.handleCloseModal}>X</button>
//           {infoCard}
//         </ReactModal>
//       </div>
//     )
//   }


//   return (
//     <div className="modals">
//       {cardList}
//     </div>
//     )
// }

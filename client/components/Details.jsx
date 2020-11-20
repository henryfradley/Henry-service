import React from 'react';

let Details = function(props) {

  return (
    <div className="question">
      <p>Have a question? <a className="sendAMessage">Send {props.title} a message!</a></p>

    <div className="details">
      <div className="detailHead">Details</div>
      <div className="column">
  <div><div className="detailList">Check in:</div> After {props.details.checkIn}</div>
        <div><div className="detailList">Check out:</div> After {props.details.checkOut}</div>
        <div><div className="detailList">Cancellation policy:</div> {props.details.cancellation}</div>
      </div>
      <div className="column">
        <div><div className="detailList">On arrival:</div> Meet and greet</div>
        <div><div className="detailList">Minimum nights:</div> {props.details.nights} night</div>
        <div><div className="detailList">Accepts bookings:</div> {props.details.bookings} months out</div>
      </div>
    </div>
    </div>

  )

}

export default Details;



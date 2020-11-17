import React from 'react';

let Details = function(props) {

  return (
    <div className="question">
      <p>Have a question? <a className="sendAMessage">Send {props.title} a message!</a></p>

    <div className="details">
      <div>Details</div>
      <div><div className="detailList">Check in:</div> After 1pm</div>
      <div><div className="detailList">Check out:</div> After 12pm</div>
      <div><div className="detailList">Cancellation policy:</div> Moderate</div>
      <div><div className="detailList">On arrival:</div> Meet and greet</div>
      <div><div className="detailList">Minimum nights:</div> 1 night</div>
      <div><div className="detailList">Accepts bookings:</div> 12 months out</div>
    </div>
    </div>

  )

}

export default Details;



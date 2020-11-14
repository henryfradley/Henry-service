import React from 'react';

let Details = function(props) {

  return (
    <div className="question">
      <p>Have a question? <a>Send {props.title} a message!</a></p>
    <div>Details</div>
    <ul>
      <li>Check in: After 1pm</li>
      <li>Check out: After 12pm</li>
      <li>Cancellation policy: Moderate</li>
      <li>On arrival: Meet and greet</li>
      <li>Minimum nights: 1 night</li>
      <li>Accepts bookings: 12 months out</li>
    </ul>
    </div>
  )

}

export default Details;


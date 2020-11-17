import React from 'react';
import ReadMore from './ReadMore.jsx'

let Listing = function(props) {

  return (
    <div className="listing">
      <div className="topListing"></div>
        <div className="hostedBy">
        Hosted by {props.title}
        </div>
        <div className="covid">
        <p>{props.title} has self-certified that Hipcamp’s COVID-19 Safety Standards have been implemented at this listing. See what’s being done <a className="covid" href="/">here</a>.</p>
      </div>

      <div classsName="readMore">
      <p>The home of {props.title}</p>
      <p className="details">
        {props.description}
      </p>
      <ReadMore description={props.description} />

      </div>
    </div>




  )


}


export default Listing;


import React from 'react';

let Listing = function(props) {

  return (
    <div className="listing">
      <div className="covid">
      <p>{props.title} has self-certified that Hipcamp’s COVID-19 Safety Standards have been implemented at this listing. See what’s being done here.</p>
      </div>
      <p className="details">
        {props.description}
      </p>
    </div>


  )


}


export default Listing;
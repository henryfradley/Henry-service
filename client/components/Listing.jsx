import React from 'react';
import ReadMore from './ReadMore.jsx'
import { CgCheck } from "react-icons/cg";

let Listing = function(props) {

  return (
    <div className="listing">
      <div className="topListing">
      <div className="listedBy">
        <span className="profilePhoto"></span>
        <div className="hostedBy">Hosted by {props.title}
        </div>
      </div>

        <div className="covid">
        <p> <CgCheck size="30px" /> {props.title} has self-certified that Hipcamp’s COVID-19 Safety Standards have been implemented at this listing. See what’s being done <a className="here" href="/">here</a>.</p>
      </div>
      </div>

      <div>
        <p className="description">The home of {props.title}</p>
        <p className="description">
        {props.description}
        </p>
      </div>
    </div>




  )


}


export default Listing;


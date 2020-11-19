import React from 'react';
import { CgCheck } from "react-icons/cg";
import ReadMore from 'read-more-react'
let Listing = function(props) {
    return (
      <div className="listing">
        <div className="topListing">
        <div className="listedBy">
         <img className="profilePhoto" src={props.photo}></img>
          <div className="hostedBy">Hosted by <span className="host">{props.title}</span>
          </div>
        </div>

          <div className="covid">
          <p> <CgCheck size="30px" /> {props.title} has self-certified that Hipcamp’s COVID-19 Safety Standards have been implemented at this listing. See what’s being done <a className="here" href="/">here</a>.</p>
        </div>
        </div>

        <div>
          <p className="description">The home of {props.title}.</p>
          <p className="description">
            {props.description ? <ReadMore text={props.description}
            min={50}
            ideal={200}
            max={1000}
            readMoreText="Read more..."/> : null
            }
          </p>
        </div>
      </div>
    )









}


export default Listing;

// {props.description}
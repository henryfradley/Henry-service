import React from 'react';
import { CgCheck } from "react-icons/cg";
import { MdStars } from "react-icons/md";
let Listing = function(props) {
  const [showParagraph, setShowParagraph] = React.useState(false)
  const readMoreClick = () => setShowParagraph(true)



    return (
      <div className="listing">
        <div className="topListing">
        <div className="listedBy">
        <span className="star"><MdStars color="#ffdd42" size="25px"/></span>
         <img className="profilePhoto" src={props.photo}></img>
          <div className="hostedBy">
            <div className="by">Hosted by </div>
            <div className="host">{props.title}</div>
          </div>
        </div>

          <div className="covid">
          <p> <CgCheck size="30px" /> {props.title} has self-certified that Hipcamp’s COVID-19 Safety Standards have been implemented at this listing. See what’s being done <a className="here" href="/">here</a>.</p>
        </div>
        </div>

        <div>
          <p className="description">The home of {props.title}.</p>
          {showParagraph ? <p className="description-2">
            {props.description}
          </p> : <div><p className="description-1">
            {props.description}
          </p>
            <p onClick={readMoreClick} className="read">Read more...</p></div>
            }
        </div>
      </div>
    )









}


export default Listing;


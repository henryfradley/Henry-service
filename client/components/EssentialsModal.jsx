import React from 'react';
import { FaToiletPaper } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { GiCampfire } from "react-icons/gi";

let EssentialsModal = function(props) {


  return (
    <div>
    <h1>Essentials</h1>
    <div className="detailBox">
      <FaToiletPaper size="30px"/>
      <br/>
      {props.info.toilet}
    </div>
    <div className="detailBox">
      <FaDog size="30px"/>
      <br/>
      {props.info.pets}
    </div>
    <div className="detailBox">
      <GiCampfire size="40px"/>
      <br/>
      {props.info.campfire}
    </div>
    </div>
  )
}

export default EssentialsModal;
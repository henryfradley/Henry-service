import React from 'react';
import { GrSwim } from "react-icons/gr";
import { MdDirectionsBike} from "react-icons/md";
import { GiFishingHook } from "react-icons/gi";
import { FaHiking } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";
import { GiHorseHead } from "react-icons/gi";
import { GiWaveSurfer } from "react-icons/gi";

let Activity = (props) => {
  return <div>{props.value}</div>
}


let Activities = (props) => {
  let activityIcons = {
    biking: <MdDirectionsBike size="50px"/>,
    fishing: <GiFishingHook size="50px"/>,
    hiking: <FaHiking size="50px"/>,
    birdWatching: <GiHummingbird size="50px"/>,
    swimming: <GrSwim size="50px"/>,
    horses: <GiHorseHead size="50px"/>,
    surfing: <GiWaveSurfer size="50px"/>,



  }


  let activities = props.activities;
  let list = [];
  for (var key in activities) {
    if (activities[key] === 1) {
      list.push(key);
    }
  }
  const listItems = list.map((activity) =>
<div className="activity"><div className="activityBlock">{activityIcons[activity]}</div><Activity value={activity}/></div>
  )
  return (
    <div>
      <h3 className="activityHead">Activities</h3>
      <div>Offered on the Host's property or nearby</div>
      <div className="activityList">
      {listItems}
    </div>

    </div>
  )

}


export default Activities;
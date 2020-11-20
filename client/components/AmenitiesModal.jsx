import React from 'react';
import { GiWaterSplash } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { BiWifi } from "react-icons/bi";
import { FaShower } from "react-icons/fa";
import { GiTrashCan } from "react-icons/gi";
import { SiAirtable } from "react-icons/si";
import { FaTshirt } from "react-icons/fa";




let AmenitiesModal = function(props) {


  return (
    <div>
    <h1>Amenities</h1>
    <div className="detailBox">
      <GiWaterSplash size="30px"/>
      <br/>
      {props.info.water}
    </div>
    <div className="detailBox">
      <GiKnifeFork size="30px"/>
      <br/>
      {props.info.kitchen}
      <br/>
      {props.info.kitchenInfo}
    </div>
    <div className="detailBox">
      <BiWifi size="40px"/>
      <br/>
      {props.info.wifi}
      <br/>
      <div className="detailsInfo">{props.info.wifiInfo}</div>
    </div>
    <div className="detailBox">
      <GiTrashCan size="40px"/>
      <br/>
      {props.info.bins}
      </div>
    <div className="detailBox">
      <FaShower size="35px"/>
      <br/>
      {props.info.showers}
    </div>
    <div className="detailBox">
      <SiAirtable size="30px"/>
      <br/>
      {props.info.picnicTable}
    </div>
    <div className="detailBox">
      <FaTshirt size="40px"/>
      <br/>
      {props.info.laundry}
    </div>
    </div>
  )
}

export default AmenitiesModal;
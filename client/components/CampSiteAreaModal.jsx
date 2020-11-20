import React from 'react';
import { CgShapeTriangle } from "react-icons/cg";
import { GoLocation} from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { RiParkingLine } from "react-icons/ri";
import { BiHandicap } from "react-icons/bi";


let CampSiteAreaModal = function(props) {

  return (
    <div>
    <h1 className="modalHead">Campsite Area</h1>
    <div className="detailBox">
      <CgShapeTriangle size="50px" />
      <br/>
      {props.info.tent}
    </div>
    <div className="detailBox">
      <GoLocation size="40px"/>
      <br/>
      {props.info.sites}</div>
    <div className="detailBox">
      <GoPerson size="40px"/>
      <br/>
      {props.info.guests}
    </div>
    <div className="detailBox">
      <RiParkingLine size="30px"/>
      <br/>
      {props.info.parking}</div>
    <div className="detailBox">
      <BiHandicap size="30px"/>
      <br/>
      {props.info.ada}
      </div>
    </div>
  )
}

export default CampSiteAreaModal;
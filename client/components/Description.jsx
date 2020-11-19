import React from 'react';
import { AiOutlineUpload } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
import { MdCameraAlt } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgArrowUpR } from "react-icons/cg";


let Description = function(props) {
  console.log('hey', props.photos);



  return (
    <div className="header">
        <div className="locationMap">United States  <span className="arrow arrow-1"><MdKeyboardArrowRight size="18px"/></span>  {props.state}  <span className="arrow arrow-2"><MdKeyboardArrowRight size="18px"/></span>  {props.title}  <span className="arrow arrow-3"><MdKeyboardArrowRight size="18px"/></span> </div>
       <h1 className="title">{props.title}</h1>
       <h4 className="nearbyDiv"><span className="nearby">Nearby: </span>{props.nearby}</h4>
       <div className="bar">
         <div className="recommend">
         <div className="thumbsup"><FaThumbsUp size="20px"/></div> <span className="thumbsup">95%</span> Recommend</div>
         <div className="circles">


          <img className="circle circle-1" src={props.photos[0]}></img>
          <img className="circle circle-2" src={props.photos[1]}></img>
          <img className="circle circle-3" src={props.photos[2]}></img>
          <img className="circle circle-4" src={props.photos[3]}></img>
       </div>
      <div className="topButtons">
        <button onClick={props.handleOpenModal} id ={3}className="upload"><MdCameraAlt size="15px"/>  Upload</button>
        <button onClick={props.handleOpenModal} id ={3}className="save">Save to list <MdKeyboardArrowDown size="15px"/></button>
        <button onClick={props.handleOpenModal} id ={3}className="up">
         <CgArrowUpR size="15px" />
        </button>
      </div>

       </div>
    </div>

  )
}


export default Description;
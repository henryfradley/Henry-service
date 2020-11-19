import React from 'react';
import { AiOutlineUpload } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
import { MdCameraAlt } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgArrowUpR } from "react-icons/cg";


let Description = function(props) {



  return (
    <div className="header">
        <p >United States  >  {props.state}  >  {props.title}  ></p>
       <h1 className="title">{props.title}</h1>
       <h4 className="nearbyDiv"><span className="nearby">Nearby: </span>{props.nearby}</h4>
       <div className="bar">
         <div className="recommend">
         <div className="thumbsup"><FaThumbsUp /> 95%</div> Recommend</div>
         <div className="circles">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
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
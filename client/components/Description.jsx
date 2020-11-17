import React from 'react';
import { AiOutlineUpload } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
import { MdCameraAlt } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgArrowUpR } from "react-icons/cg";


let Description = function(props) {



  return (
    <div className="header">
        {/* <div className="location">
          <p>United States  ></p>
          <p> {props.state}  ></p>
          <p> {props.title}  ></p>

        </div> */}
        <p >United States  >  {props.state}  >  {props.title}  ></p>
       <h1 className="title">{props.title}</h1>
       <h4 className="nearbyDiv"><span className="nearby">Nearby: </span>{props.nearby}</h4>
       <div className="bar">
         <div className="recommend">
         <span className="thumbsup"><FaThumbsUp /> 95%</span> Recommend</div>
         <div className="circles">
           <span className="circle"></span>
           <span className="circle"></span>
           <span className="circle"></span>
           <span className="circle"></span>
         </div>

       <button className="upload"><MdCameraAlt size="15px"/>  Upload</button>
       <button className="save">Save to list <MdKeyboardArrowDown size="15px"/></button>
       <button className="up">
         <CgArrowUpR size="15px" />
       </button>
       </div>
    </div>

  )
}


export default Description;
import React from 'react';

let Description = function(props) {



  return (
    <div className="header">
        <p className="location">United States  >  {props.state}  >  {props.title}  ></p>
       <h1 className="title">{props.title}</h1>
       <h4 className="nearbyDiv"><span className="nearby">Nearby: </span>{props.nearby}</h4>
       <div className="bar">
       <span className="recommend">Recommend</span>
       <button className="upload">Upload</button>
       <button className="save">Save to list</button>
       <button className="up">up</button>
       </div>
    </div>

  )
}


export default Description;
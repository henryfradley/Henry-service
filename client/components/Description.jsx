import React from 'react';

let Description = function(props) {



  return (
    <div className="header">
        <p className="location">United States > {props.state} > {props.title} ></p>
       <h1 className="title">{props.title}</h1>
       <h4 className="nearbyDiv"><span className="nearby">Nearby: </span>{props.nearby}</h4>
       <span>Recommend</span>
       <button className="upload">Upload</button>
       <button className="upload">Save to list</button>
       <button className="upload">up</button>
    </div>

  )
}


export default Description;
import React from 'react';

let Description = function(props) {



  return (
    <div className="header">
        <p>United States > {props.state} > {props.title}</p>
       <h1>{props.title}</h1>
       <h3>Nearby: {props.nearby}</h3>
       <span>Recommend</span>
       <button>Upload</button>
       <button>Save to list</button>
       <button>up</button>
    </div>

  )
}


export default Description;
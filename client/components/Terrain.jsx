import React from 'react';

let Terrain = (props) => {
  return (
    <div className="terrain">
      <h3>Terrain</h3>
      <div>Natural features you'll find at {props.title} in {props.state}</div>
      <div className="terrainTypes">
        {props.terrain}
      </div>

    </div>



  )

}



export default Terrain;
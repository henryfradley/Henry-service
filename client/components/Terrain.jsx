import React from 'react';

import { GiWaterDrop } from "react-icons/gi";
import { GiFarmer } from "react-icons/gi";
import { GiBeachBucket } from "react-icons/gi";
import { GiForestCamp } from "react-icons/gi";
import { GiMountains } from "react-icons/gi";
import { MdLandscape } from "react-icons/md";
import { GiDesert } from "react-icons/gi";
import { GiWaterfall } from "react-icons/gi";
import { SiRancher } from "react-icons/si";

let Terrain = (props) => {
  let terrainIcons = {
    Farm: <GiFarmer size="40px"/>,
    Beach: <GiBeachBucket size="40px"/>,
    Forest: <GiForestCamp size="40px"/>,
    Mountain: <GiMountains size="40px"/>,
    Coastal: <MdLandscape size="40px"/>,
    Desert: <GiDesert size="40px"/>,
    Lake: <GiWaterDrop size="40px"/>,
    Waterfall: <GiWaterfall size="40px"/>,
    Ranch: <SiRancher size="40px"/>
  }


  return (
    <div className="terrain">
      <h3 className="terrainHead">Terrain</h3>
      <div>Natural features you'll find at {props.title} in {props.state}</div>
      <div className="terrainTypes">
        {terrainIcons[props.terrain]}
        <h3 className="terrainTitle">{props.terrain}</h3>
        {props.terrainDetails}
      </div>

    </div>



  )

}



export default Terrain;
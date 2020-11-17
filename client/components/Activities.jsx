import React from 'react';


let Activity = (props) => {
  return <div>{props.value}</div>
}


let Activities = (props) => {
  let activities = props.activities;
  let list = [];
  for (var key in activities) {
    if (activities[key] === 1) {
      list.push(key);
    }
  }
  const listItems = list.map((activity) =>
  <div className="activity"><Activity value={activity}/></div>
  )
  return (
    <div>
      <div>Activities</div>
      <div>Offered on the Host's property or nearby</div>
      {listItems}
    </div>
  )

}


export default Activities;
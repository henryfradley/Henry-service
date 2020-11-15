import React from 'react';
import ReactModal from 'react-modal';

let ModalInfo = (props) => {
  return <div>{props.value}</div>
};

let Modals = (props) => {
  //campsite
  let campsiteArea = props.area;
  let areaList = [];
  for (var key in campsiteArea) {
    areaList.push(campsiteArea[key])
  }
  const areaListItems = areaList.map((info) =>
  <ModalInfo value={info} />
  );

  let amenities = props.amenities;
  let amenitieList = [];
  for (var key in amenities) {
    amenitieList.push(amenities[key])
  }
  const amenitieListItems = amenitieList.map((info) =>
  <ModalInfo value={info} />
  );

  let essentials = props.essentials;
  let essentialList = [];
  for (var key in essentials) {
    essentialList.push(essentials[key])
  }
  const essentialListItems = essentialList.map((info) =>
  <ModalInfo value={info} />
  );


  return (
    // onClick={this.handleOpenModal}
    <div>



      <div className="campSiteArea">
        {areaListItems}
        <button id="area" onClick={props.handleOpenModal}>More details</button>
        <ReactModal isOpen={props.showModal}>
          {areaListItems}
          <button onClick={props.handleCloseModal}>Close</button>
        </ReactModal>
      </div>
      <div className="infoCard">
        {amenitieListItems}
      </div>
      <div className="infoCard">
        {essentialListItems}
      </div>

    </div>

    )


}

export default Modals;






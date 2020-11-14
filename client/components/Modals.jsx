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
      <div className="campsiteArea">
      {areaListItems}
      <button id="area" onClick={props.handleOpenModal}>More details</button>
      <ReactModal isOpen={props.showModal}>
        {areaListItems}
        <button onClick={props.handleCloseModal}>Close</button>
      </ReactModal>
      </div>
      <div className="amenities">
      {amenitieListItems}
      </div>
      <div className="essentials">
      {essentialListItems}
      </div>
    </div>

    )


}

export default Modals;




//   return (
//     // onClick={this.handleOpenModal}
//     <div>
//       <div className="campsiteArea">
//       <div>Campsite Area </div>
//       <div>{site.tent}</div>
//       <div>{site.sites} sites</div>
//       <div>Up to {site.guests} guests per site</div>
//       <div>{site.parking}</div>
//       <div>{site.ada}</div>

//       </div>
//       <div className="essentials">
//         <div>Essentials</div>
//         <div>Toilet {essentials.toilet}</div>
//         <div>{essentials.pets}</div>
//         <div>{essentials.campfire}</div>
//         <button onClick={props.handleOpenModal}>More details</button>
//       {/* <ReactModal isOpen={props.showModal}>
//         <button onClick={props.handleCloseModal}>Close Modal</button>
//       </ReactModal> */}
//       </div>
//       <div className="amenities">
//         <div>Amenities</div>
//         <div>{amenities.water}</div>
//         <div>{amenities.kitchen}</div>
//         <div>{amenities.wifi}</div>
//         <div>{amenities.bins}</div>
//         <div>{amenities.showers}</div>
//         <div>{amenities.picnicTable}</div>
//         <div>{amenities.laundry}</div>
//         <button onClick={props.handleOpenModal}>More details</button>
//       {/* <ReactModal isOpen={props.showModal}>
//         <button onClick={props.handleCloseModal}>Close Modal</button>
//       </ReactModal> */}
//       </div>
//       </div>
//     )


// }

// export default Modals;



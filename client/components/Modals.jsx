import React from 'react';
import ReactModal from 'react-modal';

let Modals = (props) => {
  //campsite
  let site = props.area;
  if (site.tent === 1) {
    site.tent = 'Shelter provided';
  } else {
    site.tent = 'Bring your own';
  }
  if (site.parking === 1) {
    site.parking = 'Park at listing';
  } else {
    site.parking = 'No onsite parking available'
  }
  if (site.ada === 1) {
    site.ada = 'ADA access available'
  } else {
    site.ada = 'No ADA access'
  }
  //essentials
  let essentials = props.essentials;
  if (essentials.toilet === 1) {
    essentials.toilet = 'available';
  } else {
    essentials.toilet = 'unavailable';
  }
  if (essentials.pets === 1) {
    essentials.pets = 'Pets allowed';
  } else {
    essentials.pets = 'No pets allowed';
  }
  if (essentials.campfire === 1) {
    essentials.campfire = 'Campfires allowed';
  } else {
    essentials.campfire = 'No campfires';
  }
  //amenities
  let amenities = props.amenities;
  if (amenities.water === 1) {
   amenities.water = 'Potable water available'
  }
  if (amenities.kitchen === 1) {
    amenities.kitchen = 'Kitchen available'
  } else {
    amenities.kitchen = 'No kitchen'
  }
  if (amenities.wifi === 1) {
    amenities.wifi = 'Wifi available'
  } else {
    amenities.wifi = 'No Wifi'
  }
  if (amenities.bins === 1) {
    amenities.bins = 'Bins available'
  } else {
    amenities.bins = 'No Bins'
  }
  if (amenities.showers === 1) {
    amenities.showers = 'No showers'
  } else {
    amenities.showers = 'Hot showers available'
  }
  if (amenities.picnicTable === 1) {
    amenities.picnicTable = 'No picnic table'
  } else {
    amenities.picnicTable = 'Picnic table available'
  }
  if (amenities.laundry === 1) {
    amenities.laundry = 'Laundry absent'
  } else {
    amenities.laundry = 'Laundry machines available'
  }


  return (
    // onClick={this.handleOpenModal}
    <div>
      <div className="campsiteArea">
      <div>Campsite Area </div>
      <div>{site.tent}</div>
      <div>{site.sites} sites</div>
      <div>Up to {site.guests} guests per site</div>
      <div>{site.parking}</div>
      <div>{site.ada}</div>
      <button id="area" onClick={props.handleOpenModal}>More details</button>
      <ReactModal isOpen={props.showModal}>
      <div>Campsite Area </div>
      <div>{site.tent}</div>
      <div>{site.sites} sites</div>
      <div>Up to {site.guests} guests per site</div>
      <div>{site.parking}</div>
      <div>{site.ada}</div>
        <button onClick={props.handleCloseModal}>Close</button>
      </ReactModal>
      </div>
      <div className="essentials">
        <div>Essentials</div>
        <div>Toilet {essentials.toilet}</div>
        <div>{essentials.pets}</div>
        <div>{essentials.campfire}</div>
        <button onClick={props.handleOpenModal}>More details</button>
      {/* <ReactModal isOpen={props.showModal}>
        <button onClick={props.handleCloseModal}>Close Modal</button>
      </ReactModal> */}
      </div>
      <div className="amenities">
        <div>Amenities</div>
        <div>{amenities.water}</div>
        <div>{amenities.kitchen}</div>
        <div>{amenities.wifi}</div>
        <div>{amenities.bins}</div>
        <div>{amenities.showers}</div>
        <div>{amenities.picnicTable}</div>
        <div>{amenities.laundry}</div>
        <button onClick={props.handleOpenModal}>More details</button>
      {/* <ReactModal isOpen={props.showModal}>
        <button onClick={props.handleCloseModal}>Close Modal</button>
      </ReactModal> */}
      </div>
      </div>
    )


}

export default Modals;



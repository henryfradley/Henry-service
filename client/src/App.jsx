import React from 'react';
import ReactDOM from 'react-dom';
import Description from '../components/Description.jsx';
import Listing from '../components/Listing.jsx';
import Details from '../components/Details.jsx';
import Activities from '../components/Activities.jsx';
import Terrain from '../components/Terrain.jsx';
import CardList from '../components/CardList.jsx';
import CampSiteAreaModal from '../components/CampSiteAreaModal.jsx';
import AmenitiesModal from '../components/AmenitiesModal.jsx';
import EssentialsModal from '../components/EssentialsModal.jsx';
import { FaDog } from "react-icons/fa";

const axios = require('axios');


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hostedBy: '',
      state: '',
      city: '',
      nearby: '',
      fullDescription: '',
      cards: [],
      campSiteArea: {},
      csInfo: {},
      essentials: {},
      essentialInfo: {},
      amenities: {},
      amenitieInfo: {},
      activities: {},
      terrain: '',
      showModal: false,
      modalList: [<CampSiteAreaModal />, <AmenitiesModal />, <EssentialsModal />],
      currentModal: <div>this is where a modal should go </div>
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    // this.toggleModal = this.toggleModal.bind(this);
  }


  // //need to make so it knows which div info to pop up
  handleOpenModal(event) {
    let cardId = event.target.getAttribute('id');
    let modalList = [<CampSiteAreaModal info={this.state.csInfo} />, <AmenitiesModal info={this.state.amenitieInfo}/>, <EssentialsModal info={this.state.essentialInfo}/>]
    let popup = modalList[cardId];
    this.setState({
      showModal: true,
      currentModal: popup
    })
  };

  handleCloseModal() {
    this.setState({
      showModal: false,
      currentModal: <div></div>
    });
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'api/campsites/1'
    })
    .then(response => {

      let site = response.data[0];
      let csInfo = {
        tent: site.tent,
        sites: site.sites,
        guests: site.guests,
        parking: site.parking,
        ada: site.ada
      };
      let essentialInfo = {
        toilet: site.toilet,
        pets: site.pets,
        campfire: site.campfire

      };
      let amenitieInfo = {
        water: site.water,
        kitchen: site.kitchen,
        wifi: site.wifi,
        bins: site.bins,
        showers: site.showers,
        picnicTable: site.picnicTable,
        laundry: site.laundry
      };
      let campSiteArea = [<h1 className="card">Campsite area</h1>, site.tent, site.sites, site.guests, site.parking, site.ada];
      let amenities = [<h1 className="card">Amenities</h1>, site.water, site.kitchen, site.wifi, site.bins, site.showers, site.picnicTable, site.laundry];
      let essentials = [<h1 className="card">Essentials</h1>, site.toilet, site.pets, site.campfire];
      let activities = {
        title: 'Activities',
        biking: site.biking,
        fishing: site.fishing,
        hiking: site.hiking,
        birdWatching: site.birdWatching,
        swimming: site.swimming,
        horses: site.horses,
        surfing: site.surfing
      };

      this.setState({
        hostedBy: site.hostedBy,
        state: site.state,
        city: site.city,
        nearby: site.nearby,
        fullDescription: site.fullDescription,
        cards: [campSiteArea, amenities, essentials],
        campSiteArea: campSiteArea,
        csInfo: csInfo,
        amenities: amenities,
        amenitieInfo: amenitieInfo,
        essentials: essentials,
        essentialInfo: essentialInfo,
        activities: activities,
        terrain: site.terrain
      })
    })
    .catch(function(err) {
      console.log(err);
    })
  }





  render () {
    const { showModal } = this.state.showModal;

    return (
      <div>
        <Description title={this.state.hostedBy} nearby={this.state.nearby} state={this.state.state} />
        <Listing title={this.state.hostedBy} description={this.state.fullDescription}/>
        <CardList showModal={this.state.showModal} handleOpenModal={this.handleOpenModal} handleCloseModal={this.handleCloseModal} cards={this.state.cards} currentModal={this.state.currentModal} />
        <Details title={this.state.hostedBy} />
        <Activities activities={this.state.activities} />
        <Terrain title={this.state.hostedBy} state={this.state.state} terrain ={this.state.terrain} />
      </div>

    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));


// componentDidMount() {
//   axios({
//     method: 'GET',
//     url: 'api/campsites/1'
//   })
//   .then(response => {

//     let site = response.data[0];
//     let campSiteArea = ['Campsite area', site.tent, site.sites, site.guests, site.parking, site.ada]
//     let amenities = ['Amenities', site.water, site.kitchen, site.wifi, site.bins, site.showers, site.picnicTable, site.laundry]
//     let essentials = ['Essentials', site.toilet, site.pets, site.campfire]
//     let activities = {
//       title: 'Activities',
//       biking: site.biking,
//       fishing: site.fishing,
//       hiking: site.hiking,
//       birdWatching: site.birdWatching,
//       swimming: site.swimming,
//       horses: site.horses,
//       surfing: site.surfing
//     };

//     this.setState({
//       hostedBy: site.hostedBy,
//       state: site.state,
//       city: site.city,
//       nearby: site.nearby,
//       fullDescription: site.fullDescription,
//       cards: [campSiteArea, amenities, essentials],
//       campSiteArea: campSiteArea,
//       amenities: amenities,
//       essentials: essentials,
//       activities: activities,
//       terrain: site.terrain
//     })
//   })
//   .catch(function(err) {
//     console.log(err);
//   })
// }


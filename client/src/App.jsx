import React from 'react';
import ReactDOM from 'react-dom';
import Description from '../components/Description.jsx';
import Listing from '../components/Listing.jsx';
import Details from '../components/Details.jsx';
import Activities from '../components/Activities.jsx';
import Terrain from '../components/Terrain.jsx';
import CardList from '../components/CardList.jsx'
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
      essentials: {},
      amenities: {},
      activities: {},
      terrain: '',
      showModal: false,
      currentModal: null
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);


  }

  renderModal(event) {

  }
  //need to make so it knows which div info to pop up
  handleOpenModal(event) {
    this.setState({
      showModal: true,
      currentModal: event.target.id
    })
  };

  handleCloseModal() {
    this.setState({showModal: false});
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'api/campsites/1'
    })
    .then(response => {

      let site = response.data[0];
      let campSiteArea = ['Campsite area', site.tent, site.sites, site.guests, site.parking, site.ada]
      let amenities = ['Amenities', site.water, site.kitchen, site.wifi, site.bins, site.showers, site.picnicTable, site.laundry]
      let essentials = ['Essentials', site.toilet, site.pets, site.campfire]
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
        amenities: amenities,
        essentials: essentials,
        activities: activities,
        terrain: site.terrain
      })
    })
    .catch(function(err) {
      console.log(err);
    })
  }





  render () {

    return (
      <div>
        <Description title={this.state.hostedBy} nearby={this.state.nearby} state={this.state.state} />
        <Listing title={this.state.hostedBy} description={this.state.fullDescription}/>
        <CardList showModal={this.state.showModal} handleOpenModal={this.handleOpenModal} handleCloseModal={this.handleCloseModal} cards={this.state.cards} currentModal={this.currentModal} />
        <Details title={this.state.hostedBy} />
        <Activities activities={this.state.activities} />
        <Terrain title={this.state.hostedBy} state={this.state.state} terrain ={this.state.terrain} />
      </div>
//
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));

{/* <Cards showModal={this.state.showModal} handleOpenModal={this.handleOpenModal} handleCloseModal={this.handleCloseModal} cards={this.state.cards} currentModal={this.currentModal} /> */}





// let campSiteArea = {
//   title: 'Campsite area',
//   tent: site.tent,
//   sites: site.sites,
//   guests: site.guests,
//   parking: site.parking,
//   ada: site.ada
// };
// let amenities = {
//   title: 'Amenities',
//   water: site.water,
//   kitchen: site.kitchen,
//   wifi: site.wifi,
//   bins: site.bins,
//   showers: site.showers,
//   picnicTable: site.picnicTable,
//   laundry: site.laundry
// };
// let essentials = {
//   title: 'Essentials',
//   toilet: site.toilet,
//   pets: site.pets,
//   campfire: site.campfire
// };
// let activities = {
//   title: 'Activities',
//   biking: site.biking,
//   fishing: site.fishing,
//   hiking: site.hiking,
//   birdWatching: site.birdWatching,
//   swimming: site.swimming,
//   horses: site.horses,
//   surfing: site.surfing
// };
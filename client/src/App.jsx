import React from 'react';
import ReactDOM from 'react-dom';
import Description from '../components/Description.jsx';
import Listing from '../components/Listing.jsx';
import Modals from '../components/Modals.jsx'
import Details from '../components/Details.jsx';
import ReactModal from 'react-modal';
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
      campSiteArea: {},
      essentials: {},
      amenities: {},
      activities: {},
      terrain: '',
      showModal: false
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);


  }

  handleOpenModal() {
    this.setState({showModal: true});
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
      console.log('site', site);
      let campSiteArea = {
        tent: site.tent,
        sites: site.sites,
        guests: site.guests,
        parking: site.parking,
        ada: site.ada
      };
      let amenities = {
        water: site.water,
        kitchen: site.kitchen,
        wifi: site.wifi,
        bins: site.bins,
        showers: site.showers,
        picnicTable: site.picnicTable,
        laundry: site.laundry
      };
      let essentials = {
        toilet: site.toilet,
        pets: site.pets,
        campfire: site.campfire
      };
      let activities = {
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
        <Modals showModal={this.state.showModal} handleOpenModal={this.handleOpenModal} handleCloseModal={this.handleCloseModal} amenities={this.state.amenities} essentials={this.state.essentials} area={this.state.campSiteArea}/>
      </div>
//
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import Description from '../components/Description.jsx';
import Listing from '../components/Listing.jsx';
import Amenities from '../components/Amenities.jsx';
import Essentials from '../components/Essentials.jsx';
import CampsiteArea from '../components/CampsiteArea.jsx';
import Details from '../components/Details.jsx';
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
      campSiteArea: '',
      essentials: '',
      amenities: '',
      activities: '',
      terrain: ''
    };

  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'api/campsites'
    })
    .then(response => {
      let site = response.data[0];
      this.setState({
        hostedBy: site.hostedBy,
        state: site.state,
        city: site.city,
        nearby: site.nearby,
        fullDescription: site.fullDescription,
        campSiteArea: site.campSiteArea,
        essentials: site.essentials,
        amenities: site.amenities,
        activities: site.activities,
        terrain: site.terrain
      })
      console.log('data', this.state)

    })
    .catch(function(err) {
      console.log(err);
    })
  }





  render () {
    // let property = this.state.
    return (
      <div>
        <Description title={this.state.hostedBy} nearby={this.state.nearby} state={this.state.state} />
        <Listing title={this.state.hostedBy} description={this.state.fullDescription}/>
        <div className="modals">
          <CampsiteArea details={this.state.campSiteArea} />
          <Essentials essentials={this.state.essentials} />
          <Amenities amenities={this.state.amenities}/>
          <Details title={this.state.hostedBy} />
        </div>

      </div>
//
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
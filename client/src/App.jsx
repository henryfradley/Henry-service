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
import Login from '../components/Login.jsx'
import { CgShapeTriangle } from "react-icons/cg";
import { GoLocation} from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { IconName } from "react-icons/bs"
import { RiParkingLine } from "react-icons/ri";
import { BiHandicap } from "react-icons/bi";
import { GiWaterSplash } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { BiWifi } from "react-icons/bi";
import { FaShower } from "react-icons/fa";
import { GiTrashCan } from "react-icons/gi";
import { SiAirtable } from "react-icons/si";
import { FaTshirt } from "react-icons/fa";
import { FaToiletPaper } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { GiCampfire } from "react-icons/gi";


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
      details: {},
      currentModal: '',
      userPhotos: []
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }


  // //need to make so it knows which div info to pop up
  handleOpenModal(event) {
    let cardId = event.target.getAttribute('id');
    let modalList = [<CampSiteAreaModal info={this.state.csInfo} />, <AmenitiesModal info={this.state.amenitieInfo}/>, <EssentialsModal info={this.state.essentialInfo}/>, <Login handlePopupClick={this.handlePopup} showPopup={this.showPopup}/>]
    let popup = modalList[cardId];
    this.setState({
      showModal: true,
      currentModal: popup
    })
  };

  handleCloseModal() {
    this.setState({
      showModal: false,
      currentModal: ''
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
        petInfo: site.petInfo,
        campfire: site.campfire

      };
      let amenitieInfo = {
        water: site.water,
        kitchen: site.kitchen,
        kitchenInfo: site.kitchenInfo,
        wifi: site.wifi,
        wifiInfo: site.wifiInfo,
        bins: site.bins,
        showers: site.showers,
        picnicTable: site.picnicTable,
        laundry: site.laundry
      };
      let campSiteArea = [
        <h1 className="cardHead">Campsite area</h1>,
        <div className="iconText"><div className="icon"><CgShapeTriangle size="20px"/></div>{site.tent}</div>,
        <div className="iconText"><div className="icon"><GoLocation size="20px"/></div>{site.sites}</div>,
        <div className="iconText"><div className="icon"><GoPerson size="20px"/></div>{site.guests}</div>,
        <div className="iconText"><div className="icon"><RiParkingLine size="20px"/></div>{site.parking}</div>,
        <div className="iconText"><div className="icon"><BiHandicap size="20px"/></div>{site.ada}</div>
      ];
      let amenities = [
        <h1 className="cardHead">Amenities</h1>,
        <div className="iconText"><div className="icon"><GiWaterSplash size="20px"/></div>{site.water}</div>,
        <div className="iconText"><div className="icon"><GiKnifeFork size="20px"/></div>{site.kitchen}</div>,
        <div className="iconText"><div className="icon"><BiWifi size="20px"/></div>{site.wifi}</div>,
        <div className="iconText"><div className="icon"><FaShower size="20px"/></div>{site.showers}</div>,
        <div className="iconText"><div className="icon"><GiTrashCan size="20px"/></div>{site.bins}</div>,
        <div className="iconText"><div className="icon"><SiAirtable size="20px"/></div>{site.picnicTable}</div>,
        <div className="iconText"><div className="icon"><FaTshirt size="20px"/></div>{site.laundry}</div>
      ];
      let essentials = [
        <h1 className="cardHead">Essentials</h1>,
        <div className="iconText"><div className="icon"><FaToiletPaper size="20px"/></div>{site.toilet}</div>,
        <div className="iconText"><div className="icon"><FaDog size="20px"/></div>{site.pets}</div>,
        <div className="iconText"><div className="icon"><GiCampfire size="20px"/></div>{site.campfire}</div>
      ];
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
      let details = {
        checkIn: site.checkIn,
        checkOut: site.checkOut,
        cancellation: site.cancellation,
        nights: site.nights,
        bookings: site.bookings
      }

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
        terrain: site.terrain,
        terrainDetails: site.terrainDetails,
        details: details,
        profileImage: site.profileImage,
        userPhotos: [site.image1, site.image2, site.image3, site.image4]
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
        <Description handleOpenModal={this.handleOpenModal} handleCloseModal={this.handleCloseModal} title={this.state.hostedBy} nearby={this.state.nearby} state={this.state.state} photos={this.state.userPhotos}/>
        <Listing title={this.state.hostedBy} description={this.state.fullDescription} photo={this.state.profileImage}/>
        <CardList showModal={this.state.showModal} handleOpenModal={this.handleOpenModal} handleCloseModal={this.handleCloseModal} cards={this.state.cards} currentModal={this.state.currentModal} />
        <Details title={this.state.hostedBy} details={this.state.details} />
        <Activities activities={this.state.activities} />
        <Terrain title={this.state.hostedBy} state={this.state.state} terrain ={this.state.terrain} terrainDetails={this.state.terrainDetails}/>
      </div>

    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));



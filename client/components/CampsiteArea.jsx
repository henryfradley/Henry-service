import React from 'react';

class CampsiteArea extends React.Component {
  constructor() {
    super();
    this.state = {
      tent: false,
      sites: 0,
      guests: 0,
      parking: false,
      ada: false
    };
  }

  componentDidMount() {
    // let campsiteData = JSON.parse();
    // for (var key in campsiteData) {
    //   this.setState({key: campsiteData[key]})
    // }
    console.log('campsite', this.state)
  }

  render() {
    return (

      <div className="modals">
        <h3>Campsite Area</h3>
      </div>
    )
  }

}






export default CampsiteArea;


// let CampsiteArea = function() {
//   return (
//     <div className="modals">
//       <h3>Campsite Area</h3>
//     </div>
//   )

// }

import React from 'react';

// let CampsiteArea = function(props) {
//   return (
//     <div className="modals">
//       <h3>Campsite Area</h3>
//       <p>{props.details}</p>
//     </div>
//   )

// }



class CampsiteArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tent: false,
      sites: 0,
      guests: 0,
      parking: false,
      ada: false
    };
  }

  this.details = this.props.details.parseJSON()

  componentDidMount(props) {
    this.setState({
      tent: this.props.tent
    })
    console.log('campsite', this.state)
    console.log('campsiteArea', this.props.details)
  }

  render() {
    return (

      <div className="modals">
        <h3>Campsite Area</h3>
        <p>{this.props.details}</p>
      </div>
    )
  }

}


export default CampsiteArea;
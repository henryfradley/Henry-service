import React from 'react';
import ReactDOM from 'react-dom';
import Description from '../components/Description.jsx';
import Listing from '../components/Listing.jsx';
const axios = require('axios');


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      campsiteData: []
    };
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'api/campsites'
    })
    .then(response => {
      this.setState({campsiteData: response.data})
      console.log('data?', this.state.campsiteData[0])
    })
    .catch(function(err) {
      console.log(err);
    })
  }





  render () {
    let property = this.state.campsiteData[0]
    return (
      <div>
        <Description property={this.props.property} />
        <Listing />
      </div>
//
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
import axios from 'axios';


const getDummyData = require('./App')
jest.mock('axios');


it('gets 100 different random campsite data', axios({
  method: 'GET',
  url: 'api/campsites'
})
  .then(results => {
    console.log(results.data);
    expect(results.data.length).toBe(100);

  }))




// const axios = require('axios');


it('Testing to see if Jest works', () => {
  expect(2).toBe(2);
});


// axios({
//   method: 'GET',
//   url: 'api/campsites'
// })
//   .then(results => {
//     console.log(results.data);
//     // let dataCount = results.data.length;

//   });



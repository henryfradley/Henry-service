const app = require('../server.js');
const supertest = require('supertest');
const request = supertest(app);
import 'regenerator-runtime/runtime';
import axios from 'axios';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CardList from '../../client/components/CardList.jsx'
import Description from '../../client/components/Description.jsx'
import Listing from '../../client/components/Listing.jsx'

Enzyme.configure({ adapter: new Adapter() });
jest.mock('axios');

const mockCards = [
  ['card1', 'card2', 'card3']
]
const mockData = ['title', 'nearby', 'state']
const mockPhotos = ['image1', 'image2', 'image3']

describe('checkEndpoints', () => {
  it('Testing to see if Jest works', () => {
    expect(2).toBe(2);
  });
  it('gets the campsite endpoint', async done => {
    const response = await request.get('/api/campsites/1');
    expect(response.status).toBe(200);
    done();
  });
  it('recieves the correct data corresponding to the id', async done => {
    let id = 2;
    const response = await request.get(`/api/campsites/${id}`);
    expect(response.body[0].propertyId).toBe(id);
    // expect(response.data[0].propertyId).toBe(2);
    done();
  });
});


describe('CardList component', () => {
  test('renders', () => {
    const wrapper = shallow(<CardList cards={mockCards}/>);

    expect(wrapper.exists()).toBe(true)
  });
});


describe('Description component', () => {
  test('renders', () => {
    const wrapper = shallow( <Description title={mockData[0]} nearby={mockData[1]} state={mockData[2]} photos={mockPhotos}/>);

    expect(wrapper.exists()).toBe(true)
  });
});















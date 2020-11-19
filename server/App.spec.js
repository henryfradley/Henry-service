const app = require('./server.js');
const supertest = require('supertest');
const request = supertest(app);
import 'regenerator-runtime/runtime';
import axios from 'axios';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CardList from '../client/components/CardList.jsx'
import Description from '../client/components/Description.jsx'

Enzyme.configure({ adapter: new Adapter() });
jest.mock('axios');

const mockCards = [
  ['card1', 'card2', 'card3']
]
const mockData = ['title', 'nearby', 'state']

describe('checkEndpoint', () => {
  it('Testing to see if Jest works', () => {
    expect(2).toBe(2);
  });
  it('gets the campsite endpoint', async done => {
    const response = await request.get('/api/campsites/1');
    expect(response.status).toBe(200);
    done();
  })
})

describe('CardList component', () => {
  test('renders', () => {
    const wrapper = shallow(<CardList cards={mockCards}/>);

    expect(wrapper.exists()).toBe(true)
  })
})


describe('Description component', () => {
  test('renders', () => {
    const wrapper = shallow( <Description title={mockData[0]} nearby={mockData[1]} state={mockData[2]} />);

    expect(wrapper.exists()).toBe(true)
  })
})












const faker = require('faker');

const database = require('./server/database/db.js');

let createTable = 'CREATE TABLE IF NOT EXISTS campsites(propertyId INT NOT NULL AUTO_INCREMENT, hostedBy VARCHAR(100), state VARCHAR(100), city VARCHAR(100), nearby VARCHAR(100),fullDescription VARCHAR(2000), campSiteArea VARCHAR(200), essentials VARCHAR(200), amenities VARCHAR(200), activities VARCHAR(200), terrain VARCHAR(200), PRIMARY KEY (propertyId));';

database.query(createTable);

for (var i = 0; i < 100; i++) {
  let hostedBy = faker.company.companyName();
  let state = faker.address.state();
  let city = faker.address.city();
  let nearby = faker.address.city();
  let fullDescription = faker.lorem.paragraphs();
  let campSiteArea = {tent: faker.random.boolean(), sites: faker.random.number({max: 50}), guests: faker.random.number({max: 50}), parking: faker.random.boolean(), ada: faker.random.boolean()};
  let essentials = {toilet: faker.random.boolean(), pets: faker.random.boolean(), campfire: faker.random.boolean()};
  let amenities = {water: faker.random.boolean(), kitchen: faker.random.boolean(), wifi: faker.random.boolean(), bins: faker.random.boolean(), showers: faker.random.boolean(), picnicTable: faker.random.boolean(), laundry: faker.random.boolean()};
  let activities = {biking: faker.random.boolean(), fishing: faker.random.boolean(), hiking: faker.random.boolean(), birdWatching: faker.random.boolean(), swimming: faker.random.boolean(), horses: faker.random.boolean(), surfing: faker.random.boolean()};
  let terrainTypes = ['Farm', 'Beach', 'Forest', 'Moutain', 'Coastal', 'Desert', 'Hot spring', 'Lake', 'Waterfall', 'Ranch'];
  let terrain = terrainTypes[faker.random.number({max: 9})];

  let queryStr = `INSERT INTO campsites VALUES (propertyId, "${hostedBy}", "${state}", "${city}", "${nearby}", "${fullDescription}", '${JSON.stringify(campSiteArea)}', '${JSON.stringify(essentials)}', '${JSON.stringify(amenities)}', '${JSON.stringify(activities)}', '${terrain}');`;

  database.query(queryStr);
}


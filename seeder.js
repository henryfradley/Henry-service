const faker = require('faker');

const database = require('./server/database/db.js');

let createTable = 'CREATE TABLE IF NOT EXISTS campsites(propertyId INT NOT NULL AUTO_INCREMENT, hostedBy VARCHAR(100), state VARCHAR(100), city VARCHAR(100), nearby VARCHAR(100),fullDescription VARCHAR(2000), tent BOOLEAN, sites INT, guests INT, parking BOOLEAN, ada BOOLEAN, toilet BOOLEAN, pets BOOLEAN, campfire BOOLEAN, water BOOLEAN, kitchen BOOLEAN, wifi BOOLEAN, bins BOOLEAN, showers BOOLEAN, picnicTable BOOLEAN, laundry BOOLEAN, biking BOOLEAN, fishing BOOLEAN, hiking BOOLEAN, birdWatching BOOLEAN, swimming BOOLEAN, horsed BOOLEAN, surfing BOOLEAN, terrain VARCHAR(200), PRIMARY KEY (propertyId));';

database.query(createTable);

for (var i = 0; i < 100; i++) {
  let hostedBy = faker.company.companyName();
  let state = faker.address.state();
  let city = faker.address.city();
  let nearby = faker.address.city();
  let fullDescription = faker.lorem.paragraphs();
  let tent = faker.random.boolean();
  let sites = faker.random.number({max: 50});
  let guests = faker.random.number({max: 50});
  let parking = faker.random.boolean();
  let ada = faker.random.boolean();
  let toilet = faker.random.boolean();
  let pets = faker.random.boolean();
  let campfire = faker.random.boolean();
  let water = faker.random.boolean();
  let kitchen = faker.random.boolean();
  let wifi = faker.random.boolean();
  let bins = faker.random.boolean();
  let showers = faker.random.boolean();
  let picnicTable = faker.random.boolean();
  let laundry = faker.random.boolean();
  let biking = faker.random.boolean();
  let fishing = faker.random.boolean();
  let hiking = faker.random.boolean();
  let birdWatching = faker.random.boolean();
  let swimming = faker.random.boolean();
  let horses = faker.random.boolean();
  let surfing = faker.random.boolean();
  let terrainTypes = ['Farm', 'Beach', 'Forest', 'Moutain', 'Coastal', 'Desert', 'Hot spring', 'Lake', 'Waterfall', 'Ranch'];
  let terrain = terrainTypes[faker.random.number({max: 9})];

  let queryStr = `INSERT INTO campsites VALUES (propertyId, "${hostedBy}", "${state}", "${city}", "${nearby}", "${fullDescription}", ${tent}, ${sites}, ${guests}, ${parking}, ${ada}, ${toilet}, ${pets}, ${campfire}, ${water}, ${kitchen}, ${wifi}, ${bins}, ${showers}, ${picnicTable}, ${laundry}, ${biking}, ${fishing}, ${hiking}, ${birdWatching}, ${swimming}, ${horses}, ${surfing}, "${terrain}");`

  database.query(queryStr);
}

// let queryString = `INSERT INTO campsites VALUES (propertyId, "${hostedBy}", "${state}", "${city}", "${nearby}", "${fullDescription}", "${tent}", "${sites}", "${guests}", "${parking}", "${ada}", "${toilet}", "${pets}", "${campfire}", "${water}", "${kitchen}", "${wifi}", "${bins}", "${showers}", "${picnicTable}", "${laundry}", "${biking}", "${fishing}", "${hiking}", "${birdWatching}", "${swimming}", "${horses}, "${surfing}", "${terrain}");`;





// let createTable = 'CREATE TABLE IF NOT EXISTS campsites(propertyId INT NOT NULL AUTO_INCREMENT, hostedBy VARCHAR(100), state VARCHAR(100), city VARCHAR(100), nearby VARCHAR(100),fullDescription VARCHAR(2000), campSiteArea VARCHAR(200), essentials VARCHAR(200), amenities VARCHAR(200), activities VARCHAR(200), terrain VARCHAR(200), PRIMARY KEY (propertyId));';

// database.query(createTable);

// for (var i = 0; i < 100; i++) {
//   let hostedBy = faker.company.companyName();
//   let state = faker.address.state();
//   let city = faker.address.city();
//   let nearby = faker.address.city();
//   let fullDescription = faker.lorem.paragraphs();
//   let campSiteArea = {name: 'Campsite area', tent: faker.random.boolean(), sites: faker.random.number({max: 50}), guests: faker.random.number({max: 50}), parking: faker.random.boolean(), ada: faker.random.boolean()};
//   let essentials = {name: 'Essentials', toilet: faker.random.boolean(), pets: faker.random.boolean(), campfire: faker.random.boolean()};
//   let amenities = {name: 'Amenities', water: faker.random.boolean(), kitchen: faker.random.boolean(), wifi: faker.random.boolean(), bins: faker.random.boolean(), showers: faker.random.boolean(), picnicTable: faker.random.boolean(), laundry: faker.random.boolean()};
//   let activities = {biking: faker.random.boolean(), fishing: faker.random.boolean(), hiking: faker.random.boolean(), birdWatching: faker.random.boolean(), swimming: faker.random.boolean(), horses: faker.random.boolean(), surfing: faker.random.boolean()};
//   let terrainTypes = ['Farm', 'Beach', 'Forest', 'Moutain', 'Coastal', 'Desert', 'Hot spring', 'Lake', 'Waterfall', 'Ranch'];
//   let terrain = terrainTypes[faker.random.number({max: 9})];

//   let queryStr = `INSERT INTO campsites VALUES (propertyId, "${hostedBy}", "${state}", "${city}", "${nearby}", "${fullDescription}", '${JSON.stringify(campSiteArea)}', '${JSON.stringify(essentials)}', '${JSON.stringify(amenities)}', '${JSON.stringify(activities)}', '${terrain}');`;

//   database.query(queryStr);
// }


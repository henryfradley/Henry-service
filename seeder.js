const faker = require('faker');

const database = require('./server/database/db.js');

let createTable = 'CREATE TABLE IF NOT EXISTS campsites(propertyId INT NOT NULL AUTO_INCREMENT, hostedBy VARCHAR(100), state VARCHAR(100), city VARCHAR(100), nearby VARCHAR(100),fullDescription VARCHAR(2000), tent VARCHAR(50), sites VARCHAR(50), guests VARCHAR(50), parking VARCHAR(50), ada VARCHAR(50), toilet VARCHAR(50), pets VARCHAR(50), campfire VARCHAR(50), water VARCHAR(50), kitchen VARCHAR(50), wifi VARCHAR(50), bins VARCHAR(50), showers VARCHAR(50), picnicTable VARCHAR(50), laundry VARCHAR(50), biking BOOLEAN, fishing BOOLEAN, hiking BOOLEAN, birdWatching BOOLEAN, swimming BOOLEAN, horsed BOOLEAN, surfing BOOLEAN, terrain VARCHAR(200), PRIMARY KEY (propertyId));';

database.query(createTable);

for (var i = 0; i < 100; i++) {
  let hostedBy = faker.company.companyName();
  let state = faker.address.state();
  let city = faker.address.city();
  let nearby = faker.address.city();
  let fullDescription = faker.lorem.paragraphs();

  let tentOptions = ['Shelter provided', 'Bring your own'];
  let tent = tentOptions[faker.random.number({min: 0, max: 1})];
  let siteNum = faker.random.number({max: 50});
  let sites = siteNum.toString() + ' sites';
  let guestsNum = faker.random.number({max: 30});
  let guests = 'Up to ' + guestsNum.toString() + ' guests per site';
  let parkingOptions = ['Park at listing', 'No onsite parking available'];
  let parking = parkingOptions[faker.random.number({min: 0, max: 1})];
  let adaOptions = ['No ADA access', 'ADA accessible'];
  let ada = adaOptions[faker.random.number({min: 0, max: 1})];
  let toiletOptions = ['Toilet available', 'Toilet unavailable'];
  let toilet = toiletOptions[faker.random.number({min: 0, max: 1})];
  let petOptions = ['No pets allowed', 'Pets allowed'];
  let pets = petOptions[faker.random.number({min: 0, max: 1})];
  let fireOptions = ['No campfires', 'Campfires allowed'];
  let campfire = fireOptions[faker.random.number({min: 0, max: 1})];
  let waterOptions = ['Potable water available', 'Bring your own water'];
  let water = waterOptions[faker.random.number({min: 0, max: 1})];
  let kitchenOptions = ['Kitchen avilable', 'Kitchen unavailable'];
  let kitchen = kitchenOptions[faker.random.number({min: 0, max: 1})];
  let wifiOptions = ['No wifi', 'Wifi available'];
  let wifi = wifiOptions[faker.random.number({min: 0, max: 1})];
  let binOptions = ['Bins available', 'No bins'];
  let bins = binOptions[faker.random.number({min: 0, max: 1})];
  let showerOptions = ['No showers', 'Hot showers available'];
  let showers = showerOptions[faker.random.number({min: 0, max: 1})];
  let picnicOptions = ['No picnic table', 'Picnic table available'];
  let picnicTable = picnicOptions[faker.random.number({min: 0, max: 1})];
  let laundryOptions = ['Laundry absent', 'Laundry available'];
  let laundry = laundryOptions[faker.random.number({min: 0, max: 1})];


  let biking = faker.random.boolean();
  let fishing = faker.random.boolean();
  let hiking = faker.random.boolean();
  let birdWatching = faker.random.boolean();
  let swimming = faker.random.boolean();
  let horses = faker.random.boolean();
  let surfing = faker.random.boolean();
  let terrainTypes = ['Farm', 'Beach', 'Forest', 'Moutain', 'Coastal', 'Desert', 'Hot spring', 'Lake', 'Waterfall', 'Ranch'];
  let terrain = terrainTypes[faker.random.number({max: 9})];

  let queryStr = `INSERT INTO campsites VALUES (propertyId, "${hostedBy}", "${state}", "${city}", "${nearby}", "${fullDescription}", "${tent}", "${sites}", "${guests}", "${parking}", "${ada}", "${toilet}", "${pets}", "${campfire}", "${water}", "${kitchen}", "${wifi}", "${bins}", "${showers}", "${picnicTable}", "${laundry}", ${biking}, ${fishing}, ${hiking}, ${birdWatching}, ${swimming}, ${horses}, ${surfing}, "${terrain}");`;

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


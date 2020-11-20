const faker = require('faker');

const database = require('./server/database/db.js');

let createTable = 'CREATE TABLE IF NOT EXISTS campsites(propertyId INT NOT NULL AUTO_INCREMENT, hostedBy VARCHAR(100), state VARCHAR(100), city VARCHAR(100), nearby VARCHAR(100),fullDescription VARCHAR(2000), tent VARCHAR(50), sites VARCHAR(50), guests VARCHAR(50), parking VARCHAR(50), ada VARCHAR(50), toilet VARCHAR(50), toiletInfo VARCHAR(150), pets VARCHAR(50), petInfo VARCHAR(150), campfire VARCHAR(50), water VARCHAR(50), kitchen VARCHAR(50), kitchenInfo VARCHAR(150), wifi VARCHAR(50), wifiInfo VARCHAR(150), bins VARCHAR(50), showers VARCHAR(50), picnicTable VARCHAR(50), laundry VARCHAR(50), biking BOOLEAN, fishing BOOLEAN, hiking BOOLEAN, birdWatching BOOLEAN, swimming BOOLEAN, horsed BOOLEAN, surfing BOOLEAN, terrain VARCHAR(200), terrainDetails VARCHAR(300), checkIn VARCHAR(10), checkOut VARCHAR(10), cancellation VARCHAR(100), nights INT, bookings INT, profileImage VARCHAR(200), image1 VARCHAR(250), image2 VARCHAR(250), image3 VARCHAR(250), image4 VARCHAR(250), PRIMARY KEY (propertyId));';

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
  let toiletInfo = faker.lorem.sentence();
  let petOptions = ['No pets allowed', 'Pets allowed'];
  let pets = petOptions[faker.random.number({min: 0, max: 1})];
  let petInfo = faker.lorem.sentence();
  let fireOptions = ['No campfires', 'Campfires allowed'];
  let campfire = fireOptions[faker.random.number({min: 0, max: 1})];
  let waterOptions = ['Potable water available', 'Bring your own water'];
  let water = waterOptions[faker.random.number({min: 0, max: 1})];
  let kitchenOptions = ['Kitchen available', 'Kitchen unavailable'];
  let kitchen = kitchenOptions[faker.random.number({min: 0, max: 1})];
  let kitchenInfo = faker.lorem.sentence();
  let wifiOptions = ['No wifi', 'Wifi available'];
  let wifi = wifiOptions[faker.random.number({min: 0, max: 1})];
  let wifiInfo = faker.lorem.sentence();
  let binOptions = ['Bins available', 'No bins'];
  let bins = binOptions[faker.random.number({min: 0, max: 1})];
  let showerOptions = ['No showers', 'Hot showers available'];
  let showers = showerOptions[faker.random.number({min: 0, max: 1})];
  let picnicOptions = ['No picnic table', 'Picnic table available'];
  let picnicTable = picnicOptions[faker.random.number({min: 0, max: 1})];
  let laundryOptions = ['Laundry absent', 'Laundry available'];
  let laundry = laundryOptions[faker.random.number({min: 0, max: 1})];


  let Biking = faker.random.boolean();
  let Fishing = faker.random.boolean();
  let Hiking = faker.random.boolean();
  let BirdWatching = faker.random.boolean();
  let Swimming = faker.random.boolean();
  let Horses = faker.random.boolean();
  let Surfing = faker.random.boolean();
  let terrainTypes = ['Farm', 'Beach', 'Forest', 'Moutain', 'Coastal', 'Desert', 'Lake', 'Waterfall', 'Ranch'];
  let terrain = terrainTypes[faker.random.number({max: 7})];
  let terrainDetails = faker.lorem.sentence();
  let checkInOptions = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm'];
  let checkIn = checkInOptions[faker.random.number({max: 6})];
  let checkOut = checkInOptions[faker.random.number({max: 6})];
  let cancellationOptions = ['Moderate', 'Strict', 'Flexible'];
  let cancellation = cancellationOptions[faker.random.number({max: 2})];
  let nights = faker.random.number({min: 1, max: 5});
  let bookings = faker.random.number({min: 1, max: 12});
  let profileImages = ['https://fec-fake-profile.s3-us-west-1.amazonaws.com/berti-benbanaste-y1IbDH8WABk-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/christian-bisbo-johnsen-TnzAK9Hhe8E-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/cristina-anne-costello-sjpWEwmhkdw-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/fernando-saltos-vuRq9B-T-Ng-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/martin-brechtl-fEdp6zsl9P0-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/martin-dawson--vKCbD17qAg-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/muradi-vI267iBm2NQ-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/pieter-van-de-sande-xdX0nOHsrGc-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/valeriy-ryasnyanskiy-j_YcCcWl_Is-unsplash.jpg'];
  let profileImage = profileImages[faker.random.number({max: 8})];
  let userImages = ['https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/seth-doyle-uJ8LNVCBjFQ-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/seth-doyle-QaZ-b11A6Zo-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/seth-doyle-IMYvZjlX3jE-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/noah-buscher-11lDEHFy_hA-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/milada-vigerova-kT0tsYZ2YE0-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/mika-W0i1N6FdCWA-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/midas-hofstra-tidSLv-UaNs-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/kenny-krosky-19iwynR1vaQ-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/jorge-saavedra-jbxL_EXEZB8-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/jessica-felicio-_cvwXhGqG-o-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/janko-ferlic-qzDF5PNEWKc-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/janko-ferlic-qzDF5PNEWKc-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/jorge-saavedra-jbxL_EXEZB8-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/kenny-krosky-19iwynR1vaQ-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/midas-hofstra-tidSLv-UaNs-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/mika-W0i1N6FdCWA-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/milada-vigerova-kT0tsYZ2YE0-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/noah-buscher-11lDEHFy_hA-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/seth-doyle-IMYvZjlX3jE-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/seth-doyle-QaZ-b11A6Zo-unsplash.jpg', 'https://fec-fake-profile.s3-us-west-1.amazonaws.com/faces/seth-doyle-uJ8LNVCBjFQ-unsplash.jpg'];
  let length = userImages.length - 1;
  let index1 = faker.random.number({max: length});
  let image1 = userImages[index1];
  userImages.splice(index1, 1);
  length = userImages.length - 1;
  let index2 = faker.random.number({max: length});
  let image2 = userImages[index2];
  userImages.splice(index2, 1);
  length = userImages.length - 1;
  let index3 = faker.random.number({max: length});
  let image3 = userImages[index3];
  userImages.splice(index3, 1);
  length = userImages.length - 1;
  let index4 = faker.random.number({max: length});
  let image4 = userImages[index4];






  let queryStr = `INSERT INTO campsites VALUES (propertyId, "${hostedBy}", "${state}", "${city}", "${nearby}", "${fullDescription}", "${tent}", "${sites}", "${guests}", "${parking}", "${ada}", "${toilet}", "${toiletInfo}", "${pets}", "${petInfo}", "${campfire}", "${water}", "${kitchen}", "${kitchenInfo}", "${wifi}", "${wifiInfo}", "${bins}", "${showers}", "${picnicTable}", "${laundry}", ${Biking}, ${Fishing}, ${Hiking}, ${BirdWatching}, ${Swimming}, ${Horses}, ${Surfing}, "${terrain}", "${terrainDetails}", "${checkIn}", "${checkOut}", "${cancellation}", "${nights}", "${bookings}", "${profileImage}", "${image1}", "${image2}", "${image3}", "${image4}");`;

  database.query(queryStr);
}


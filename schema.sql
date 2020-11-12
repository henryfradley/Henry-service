CREATE DATABASE IF NOT EXISTS properties;
USE properties;


CREATE TABLE IF NOT EXISTS campsites(
  propertyId INT NOT NULL AUTO_INCREMENT,
  hostedBy VARCHAR(100),
  nearby VARCHAR(100),
  fullDescription VARCHAR(2000),
  campSiteArea VARCHAR(200),
  essentials VARCHAR(200),
  amenities VARCHAR(200),
  activities VARCHAR(200),
  terrain VARCHAR(200),
  PRIMARY KEY (propertyId)
);

-- INSERT INTO campsites
-- VALUES (
--   1,
--   "Big B's Delicious Orchards",
--   "Crawford State Park, Paonia State Park",
--   "The home of Big B's Juices and Hard Ciders.
--   Big B's Delicious Orchards is a working farm and organic orchard. We are happy to provide our own unique style of camping as you visit our home. Our cafe and store are open 6 days a week and closed on Tuesdays. We offer lunch and dinner, a beautiful courtyard with WiFi, fun tree swings, seasonal u-pick fruits and vegetables, live music, Big B's juices and hard cider, local wines, snacks, gifts, and more! The campsites are located in different parts of our orchard and are fairly rustic. There are no utility hookups. Our orchard roads are dirt or gravel roads, and while they are perfectly good for any type of vehicle, ADA accessibility is somewhat limited.

--   We have tons of space, so you have plenty of room to wander through the orchard.

--   Our HIPCAMP camping sites are dispersed sites in our 14 acre field.  These sites have tons of space, but do not have their own picnic tables or fire rings, however we have plenty of picnic tables on the property and some communal fire rings.  If one of our dedicated sites in the orchard or by the pond is available, we will happily move you to one of our dedicated sites - just ask when you arrive if anything is available.

--   RESTROOM FACILITIES: We are awaiting the completion of a new bathroom facility with coin showers, but in the meantime, there are portable toilets located near the campsites.",
--   "{shelterIncluded: false, sites: 20, guests: 8, parking: true, ADA: false}",
--   "{toilet: true, pets: true, campfires: false}",
--   "{water: true, kitchen: true, wifi: true, bins: true, showers: false, picnicTable: false, laundry: false}",
--   "['Biking', 'Fishing', 'Hiking', 'Bird Watching']",
--   "{type: 'Farm', details: 'Organic Orchard with seasonal U-Pick Fruit, Garden Vegetables, and Fresh Eggs - perfect for your camping meals.'}"
-- );
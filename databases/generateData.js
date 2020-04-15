const faker = require('faker');
const fs = require('fs');

// number of recoreds crated
const numHosts = 3000000;
const numListings = 10000000;

const writeHosts = fs.createWriteStream('Hosts.csv');
//writes a header for the file
writeHosts.write('id;name;profile;city;state;blurb;interaction;monthJoined;yearJoined\n', 'utf8');

const write3MHosts = (writer, encoding, callback) => {
  let i = numHosts;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i--;
      id++;
      const name = faker.name.firstName();
      const profile = `https://ep-sdc-images.s3-us-west-2.amazonaws.com/host${Math.floor(Math.random() * 31) + 1}.jpg`;
      const city = faker.address.city();
      const state = faker.address.stateAbbr();
      const blurb = faker.lorem.sentences();
      const interaction = faker.lorem.sentences();
      const month = faker.date.month();
      const year = 2020 - Math.floor(Math.random() * 11);
      const data = `${id}; ${name}; ${profile}; ${city}; ${state}; ${blurb}; ${interaction}; ${month}; ${year}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

write3MHosts(writeHosts, 'utf-8', () => {
  console.log('done writing host csv file');
  writeHosts.end();
});


const writeListings = fs.createWriteStream('Listings.csv');
//writes a header for the file
writeListings.write('host;image;ratings;reviews;neighborhood;gettingAround;rules\n');

const write10MListings = (writer, encoding, callback) => {
  let i = numListings;
  const write = () => {
    let ok = true;
    do {
      i--;
      const host = Math.floor(Math.random() * 3000000) + 1;
      const image = `https://ep-sdc-images.s3-us-west-2.amazonaws.com/${Math.floor(Math.random() * 56) + 1}.jpg`;
      const ratings = Math.random() * 5 + 2;
      const reviews = Math.floor(Math.random() * 500);
      const neighborhood = faker.lorem.sentences();
      const gettingAround = faker.lorem.sentences();
      const rules = faker.lorem.sentence();

      const data = `${host}; ${image}; ${ratings}; ${reviews}; ${neighborhood}; ${gettingAround}; ${rules}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

write10MListings(writeListings, 'utf-8', () => {
  console.log('done writing the listings file');
  writeListings.end();
});



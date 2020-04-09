const faker = require('faker');
const fs = require('fs');

//number of recoreds crated
const numListings = 10000000;

const writeListings = fs.createWriteStream('mini.csv');
//writes a header for the file
writeListings.write('id;image;ratings;reviews;neighborhood;gettingAround;rules;name;profile;city;state;blurb;interaction;monthJoined;yearJoined\n');

const write10MListings = (writer, encoding, callback) => {
  let i = numListings;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i--;
      id++;
      const host = Math.floor(Math.random() * 4000001) + 1;
      const image = `https://ep-sdc-images.s3-us-west-2.amazonaws.com/${Math.floor(Math.random() * 56) + 1}.jpg`;
      const ratings = Math.random() * 5 + 2;
      const reviews = Math.floor(Math.random() * 500);
      const neighborhood = faker.lorem.sentences();
      const gettingAround = faker.lorem.sentences();
      const rules = faker.lorem.sentence();
      const name = faker.name.firstName();
      const profile = `https://ep-sdc-images.s3-us-west-2.amazonaws.com/host${Math.floor(Math.random() * 31) + 1}.jpg`;
      const city = faker.address.city();
      const state = faker.address.stateAbbr();
      const blurb = faker.lorem.sentences();
      const interaction = faker.lorem.sentences();
      const month = faker.date.month();
      const year = 2020 - Math.floor(Math.random() * 11);

      const data = `${id}; ${image}; ${ratings}; ${reviews}; ${neighborhood}; ${gettingAround}; ${rules}; ${name}; ${profile}; ${city}; ${state}; ${blurb}; '${interaction}; ${month}; ${year}\n`;
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


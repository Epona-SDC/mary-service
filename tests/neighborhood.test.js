import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import NeighborHood from '../client/components/neighborhood.jsx';
import API from '../config.js';

const title = 'Test NeighborHood Component';
const config = API.GoogleAPI;
const dataSample = {
  'rules': {
    'checkin': '10AM - 4PM',
    'checkout': '11AM',
    'body': 'Minus sunt eos incidunt quis sit quo. Amet vel hic odio quae id. Cum aut perspiciatis aut sed voluptas quam laboriosam minima. Suscipit eveniet facilis nihil soluta suscipit. Totam labore architecto at est totam ut. Officia quia soluta praesentium voluptas accusamus id dolores.\n \rQui aut alias vero consequatur distinctio dolorum sit doloribus. Vel voluptate dolores voluptatem dolore consequatur voluptate omnis aut ea. Dolores repellendus nihil in in expedita sed. Magni sed adipisci hic tempore vel molestiae ipsam repudiandae recusandae.\n \rLaudantium qui sed aut cupiditate voluptas modi autem. Et eos et. Aut et dignissimos dolorem. Voluptatem aut aut in commodi illum veniam impedit. Aperiam eum et sit. Sequi aut sed est et distinctio in deserunt quasi.'
  },
  'location': {
    'body': 'Consequatur quo quam eum aut sit voluptas. Recusandae quidem veritatis provident nihil occaecati nihil atque enim laboriosam. Non aut cumque qui sed inventore quo doloremque non veritatis.\n \rEt qui aspernatur. Et animi in id soluta dolore officiis. Et autem neque inventore aut sit. Qui voluptatum illo inventore dolor sunt consequuntur. Nulla dolor nesciunt aperiam ullam molestiae illo delectus. Molestias ducimus debitis quasi officia fuga est magni.\n \rId et rerum non ullam rerum non molestiae. Magnam quisquam ipsum ullam quasi. Perspiciatis amet temporibus dolores temporibus sapiente quis dolorum. Alias iusto voluptate quis sunt corporis et odio sit aut. Dolorum aut velit assumenda facere.',
    'gettingAround': 'Rental car is advisable.'
  },
  '_id': '5e74e650fb1dc725a5109e47',
  'zip': '24601',
  'name': 'Bridget',
  'image': 'https://fechrr.s3.amazonaws.com/host/host+(6).jpg',
  'city': 'Reillyfort',
  'state': 'ID',
  'body': 'Rerum veritatis voluptates aut nobis ratione eum. Magni rerum sunt ipsam ipsam. Temporibus est est nobis beatae at voluptas commodi dolorem nemo. Aut autem omnis sapiente libero corporis incidunt atque. Iste repellendus voluptatem fugit cumque odio dolorum sed suscipit.\n \rEt tempora ullam beatae suscipit nobis numquam. Aut quisquam vel maxime tempora quia veniam sed hic qui. Quibusdam est facilis consequatur at sapiente quia nihil inventore. Quia a tempora aut fuga ipsum aut non. Est qui autem quia nihil aliquid molestias. Voluptate quibusdam omnis.\n \rRatione officiis ipsa consequatur rem dolorem. Quia possimus at quae aut assumenda tempora voluptatem sed quo. Illo voluptatum quam quas vel aut.',
  'interaction': 'Neque qui exercitationem voluptatem ipsa. Enim autem consequatur ut et. Occaecati quaerat qui. Sapiente voluptas exercitationem suscipit blanditiis et non officiis.',
  'superhost': 'Superhost',
  'verified': 'Verified',
  'monthJoined': 'June',
  'yearJoined': '2018',
  'review': 236, '__v': 0
};
let wrapped = shallow(<NeighborHood data={dataSample} api={config}/>);
describe ('TNeighborHood Component', () => {
  it('should render the NeighborHood Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
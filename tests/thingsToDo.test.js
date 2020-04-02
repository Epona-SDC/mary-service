import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ThingsToDo from '../client/components/thingsToDo.jsx';

const title = 'Test ThingsToDo Component';
let dataSample = {
  '_id': '5e74e650fb1dc725a5109eb5',
  'zip': '24601',
  'properties': [
    {
      '_id': '5e74e650fb1dc725a5109eb6',
      'propType': 'et quidem quia',
      'image': 'https://fechrr.s3.amazonaws.com/properties/properties+(51).jpg',
      'ratings': 2.4839168887641563,
      'review': 41,
      'description': 'voluptas saepe minus',
      'cost': '190$/night'
    },
    {
      '_id': '5e74e650fb1dc725a5109eb7',
      'propType': 'sit natus laboriosam',
      'image': 'https://fechrr.s3.amazonaws.com/properties/properties+(52).jpg',
      'ratings': 1.8132940573552858,
      'review': 448,
      'description': 'inventore ipsum voluptas',
      'cost': '240$/night'
    },
    {
      '_id': '5e74e650fb1dc725a5109eb8',
      'propType': 'quis impedit voluptatibus',
      'image': 'https://fechrr.s3.amazonaws.com/properties/properties+(53).jpg',
      'ratings': 2.7803412736628275,
      'review': 134,
      'description': 'distinctio eos repellendus',
      'cost': '229$/night'
    },
    {
      '_id': '5e74e650fb1dc725a5109eb9',
      'propType': 'facere ullam dolor',
      'image': 'https://fechrr.s3.amazonaws.com/properties/properties+(54).jpg',
      'ratings': 1.799776373389338,
      'review': 67,
      'description': 'quod cupiditate reiciendis',
      'cost': '116$/night'
    },
    {
      '_id': '5e74e650fb1dc725a5109eba',
      'propType': 'facilis consequuntur ipsum',
      'image': 'https://fechrr.s3.amazonaws.com/properties/properties+(55).jpg',
      'ratings': 4.792770719932664,
      'review': 41,
      'description': 'sunt quisquam et',
      'cost': '0$/night'
    },
    {
      '_id': '5e74e650fb1dc725a5109ebb',
      'propType': 'animi qui molestiae',
      'image': 'https://fechrr.s3.amazonaws.com/properties/properties+(56).jpg',
      'ratings': 3.6254731356263195,
      'review': 437,
      'description': 'dolorum voluptas autem',
      'cost': '156$/night'
    },
    {
      '_id': '5e74e650fb1dc725a5109ebc',
      'propType': 'corporis autem blanditiis',
      'image': 'https://fechrr.s3.amazonaws.com/properties/properties+(57).jpg',
      'ratings': 4.585542572373946,
      'review': 259, 'description': 'molestias quia numquam',
      'cost': '76$/night'
    },
    {
      '_id': '5e74e650fb1dc725a5109ebd',
      'propType': 'quia a dolorem',
      'image': 'https://fechrr.s3.amazonaws.com/properties/properties+(58).jpg',
      'ratings': 1.0928220408213296,
      'review': 19,
      'description': 'laborum odit molestiae',
      'cost': '140$/night'
    },
    {
      '_id': '5e74e650fb1dc725a5109ebe',
      'propType': 'nobis ducimus exercitationem',
      'image': 'https://fechrr.s3.amazonaws.com/properties/properties+(59).jpg',
      'ratings': 2.3424630463932616,
      'review': 325,
      'description': 'consequatur doloribus qui',
      'cost': '77$/night'
    },
    {
      '_id': '5e74e650fb1dc725a5109ebf',
      'propType': 'voluptas enim alias',
      'image': 'https://fechrr.s3.amazonaws.com/properties/properties+(60).jpg',
      'ratings': 2.713204685544086,
      'review': 126,
      'description': 'cum dolor et',
      'cost': '248$/night'
    }
  ],
  'thingsToDo': [
    {
      '_id': '5e74e650fb1dc725a5109ec0',
      'image': 'https://fechrr.s3.amazonaws.com/things/things+(51).jpg',
      'thingsType': 'ex',
      'description': 'mollitia sit iste', 'cost': '39$/person'
    },
    {
      '_id': '5e74e650fb1dc725a5109ec1',
      'image': 'https://fechrr.s3.amazonaws.com/things/things+(52).jpg',
      'thingsType': 'quaerat',
      'description': 'incidunt ducimus temporibus', 'cost': '132$/person'
    },
    {
      '_id': '5e74e650fb1dc725a5109ec2',
      'image': 'https://fechrr.s3.amazonaws.com/things/things+(53).jpg',
      'thingsType': 'quae',
      'description': 'veniam aliquam quo',
      'cost': '89$/person'
    },
    {
      '_id': '5e74e650fb1dc725a5109ec3',
      'image': 'https://fechrr.s3.amazonaws.com/things/things+(54).jpg',
      'thingsType': 'quod',
      'description': 'ipsa magnam totam',
      'cost': '56$/person'
    },
    {
      '_id': '5e74e650fb1dc725a5109ec4',
      'image': 'https://fechrr.s3.amazonaws.com/things/things+(55).jpg',
      'thingsType': 'temporibus',
      'description': 'voluptatibus omnis rerum',
      'cost': '23$/person'
    },
    {
      '_id': '5e74e650fb1dc725a5109ec5',
      'image': 'https://fechrr.s3.amazonaws.com/things/things+(56).jpg',
      'thingsType': 'eaque', 'description': 'optio sit aut',
      'cost': '32$/person'
    },
    {
      '_id': '5e74e650fb1dc725a5109ec6',
      'image': 'https://fechrr.s3.amazonaws.com/things/things+(57).jpg',
      'thingsType': 'perferendis', 'description': 'est est et',
      'cost': '111$/person'
    },
    {
      '_id': '5e74e650fb1dc725a5109ec7',
      'image': 'https://fechrr.s3.amazonaws.com/things/things+(58).jpg',
      'thingsType': 'exercitationem',
      'description': 'maiores non veritatis',
      'cost': '19$/person'
    },
    {
      '_id': '5e74e650fb1dc725a5109ec8',
      'image': 'https://fechrr.s3.amazonaws.com/things/things+(59).jpg',
      'thingsType': 'ut',
      'description': 'sed nam nesciunt', 'cost': '42$/person'
    },
    {
      '_id': '5e74e650fb1dc725a5109ec9',
      'image': 'https://fechrr.s3.amazonaws.com/things/things+(60).jpg',
      'thingsType': 'molestias',
      'description': 'repudiandae non ratione',
      'cost': '116$/person'
    }
  ]};

let wrapped = shallow(<ThingsToDo data={dataSample}/>);
describe ('Things To Do Component', () => {
  it('should render the ThingsToDo Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
/* eslint-disable func-style */
import React from 'react';
import Host from './host.jsx';
import Neighborhood from './neighborhood.jsx';
import Properties from './properties.jsx';
// import ThingsToDo from './thingsToDo.jsx';
import './app.module.css';
import $ from 'jquery';

let params = (new URL(document.location)).searchParams;
let listingId = parseInt(params.get('listingId')) || 2;


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      info: {
        id: 2489864,
        host: 2489864,
        profile: 'https://ep-sdc-images.s3-us-west-2.amazonaws.com/host28.jpg',
        ratings: '4.096865749194226',
        reviews: 221,
        neighborhood: 'Labore expedita aut laudantium rerum laborum iure corporis quia. Libero hic architecto ullam qui. Omnis rerum deleniti quasi fugit id sunt. Suscipit autem voluptate non quia quibusdam itaque. Labore qui eum delectus quas quo.',
        'gettingaround': 'Velit omnis blanditiis. Eum laborum sit ab harum ab nemo molestias. Eaque praesentium vel consequatur sit facere in ut.',
        rules: 'Et voluptatum in perferendis consequatur reprehenderit rem.',
        name: 'Marlene',
        city: 'New Denniston',
        state: 'DE',
        blurb: 'Quis quisquam ipsa in voluptate labore maiores quas consequuntur. Consequatur delectus nam ex quia voluptatem nostrum.',
        interaction: 'Suscipit qui perferendis. Sit praesentium dignissimos. Aut quae porro autem. Molestiae magnam in et non quia. Est magnam aut veritatis at. Rem qui distinctio velit officia in.',
        monthjoined: 'January',
        yearjoined: 2015
      }
    };
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    $.ajax({
      url: 'http://localhost:3004/listing/' + listingId,
      method: 'GET',
      success: (data) => {
        this.setState({
          info: data
        });
      },
      error: (err) => {
        console.error('app.jsx could not get listing info', err);
      }
    });
  }

  render () {
    return (
      <div>
        <div>
          <Host data={this.state.info}/>
        </div>
        <div>
          <Neighborhood data={this.state.info}/>
        </div>
        <div>
          <Properties/>
        </div>
      </div>
    );
  }
}


export default App;
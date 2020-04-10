import React from 'react';
import css from './properties.module.css';
import styleable from 'react-styleable';
import carouselSlider from '../carouselFunc.js';

class ThingsToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80', 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80', 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'],
    };
  }

  componentDidMount() {
    carouselSlider(this.props.css.carousel, this.props.css.entry, this.props.css.prev, this.props.css.next, 7, this.props.css.hidden);
  }

  render() {
    return (
      <div className={this.props.css.root}>
        <h2>More homes you may like</h2>
        <div className={this.props.css.carousel}>
          {this.state.data.map((property) => (
            <div className={this.props.css.entry}>
              <img src={property} alt='this is a property' width={280} height={180} mode='fit'></img>
              <p className={this.props.css.type}>{property.propType}</p>
              <p className={this.props.css.description}>{property.description}</p>
              <p className={this.props.css.cost}>{property.cost}</p>
            </div>
          ))}
          <span className={`fas fa-chevron-left ${this.props.css.prev} ${this.props.css.hidden}`}></span>
          <span className={`fas fa-chevron-right ${this.props.css.next}`}></span>
        </div>
      </div>
    );
  }
}

export default styleable(css)(ThingsToDo);
import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    return(
      <ul>
        {this.props.restaurants.map((rest, idx) => {
            return <Restaurant key={idx}
            restaurant={rest}
            deleteRestaurant={this.props.deleteRestaurant}/>}
        )}
      </ul>
    );
  }
};

export default Restaurants;

import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map((rev, idx) => <Review key={idx} review={rev}/>)}
      </ul>
    );
  }
};

export default Reviews;

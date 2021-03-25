import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurantId} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews.filter(rev => rev.restaurantId === this.props.restaurantId)} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
   }
}
const mapDispatchToProps = dispatch => {
  return {
    addReview: (review, restaurantId) => dispatch({type: "ADD_REVIEW", review, restaurantId}),
    deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

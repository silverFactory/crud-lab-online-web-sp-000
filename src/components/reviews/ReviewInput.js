import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: ''
    })
  }
  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={event => this.handleOnSubmit(event)}>
        <input type="text" name="text" id="text" value={this.state.text} onChange={event => this.handleOnChange(event)}></input>
        <input type="submit" value="Submit"></input>
    </form>
    );
  }
};

export default ReviewInput;

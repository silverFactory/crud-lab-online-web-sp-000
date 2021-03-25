import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    //dispatch state from dispatchPropsAction
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }
 
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="text" id="text" value={this.state.text} onChange={event => this.handleOnChange(event)}></input>
        <input type="submit" value="Submit" ></input>
      </form>
    );
  }
};

export default RestaurantInput;

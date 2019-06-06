import React, { Component } from 'react';


class Faves extends Component {
    constructor() {
      super();
      this.state = {
        liked: false
      };
      this.FavehandleClick = this.handleClick.bind(this);
    } 
    
    FavehandleClick() {
      this.setState({
        liked: !this.state.liked
      });
    }
    
    render() {
      const text = this.state.liked ? 'liked' : 'haven\'t liked';
      const label = this.state.liked ? 'Unlike' : 'Like'
      return (
        <div className="customContainer">
          <button className="btn btn-primary" onClick={this.FavehandleClick}>
            {label}</button>
          <p>
            you {text} this. Click to toggle.
          </p>
        </div>
      );
    }
  }
  export default Faves
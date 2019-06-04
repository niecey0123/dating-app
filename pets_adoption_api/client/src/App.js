import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
    };
  }

  componentDidMount = async () => {
    const pets = await axios.get('http://localhost:4567/pets');
    const apiData = pets.data;
  }
  
  

  showPetsOnPage() {
    return this.state.apiData.map((pet) => {
      return (
        <div className="quote" key={pet.id}>
          <p className="content">{pet.name}</p>
          <span className="author">{pet.breed}</span>
          <span className="category">{pet.age}</span>
          <span className="category">{pet.location}</span>
          <span className="category">{pet.description}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          {(this.state.apiDataLoaded) ? this.showPetsOnPage() : <p>Loading...</p>}
        </div>
      </div>
    );
  }
}

export default App;
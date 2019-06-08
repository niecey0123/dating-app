import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import PetList from './components/PetList/Petlist'
import PetDetailPage from './components/PetDetailPage/PetDetailPage'
import OwnerDisplay from './components/OwnerDisplay/OwnerDisplay'
import EditPet from './components/EditPet/EditPet'
import CreateOwner from './components/CreateOwner/CreateOwner'
import ProfilePage from './components/ProfilePage/ProfilePage'
import Header from './components/Header/Header'
import {fecthAllPets} from './services/api-helper'
import { fecthAllOwners, setOwnerToPet, getMatches} from './services/owner-api-helper'
import Matches from './components/Matches/Matches';
import OwnerList from './components/OwnerList/OwnerList'
// import {createOwner} from './services/owner-api-helper'

import './App.css';
import OwnerDetailsPage from './components/OwnerDetailsPage/OwnerDetailsPage';



class App extends Component  {
  constructor() {
    super();
    this.state = {
      pets: null,
      apiDataLoaded: false,
      currentPet: {},
      user:{},
      matches : [],
      currentOwner:{},
      owners:null
    };
    this.getOwnerData = this.getOwnerData.bind(this)
    this.getPetData = this.getPetData.bind(this)

  }

  getPetData = async ()=>{
    const pets = await fecthAllPets();
    this.setState({
      pets: pets,
      apiDataLoaded:true
    })
  }
  getOwnerData = async ()=>{
    const owners = await fecthAllOwners();
    this.setState({
      owners: owners,
    })
    console.log(owners)
  }

   petFaves = async (ownerId,petId)=>{
  return await setOwnerToPet(ownerId,petId)  
}

   matchDisplay = async (ownerId, petId, matchId)=>{
    return await getMatches(2,3,2);
    
  }    
 

  createAnOwner = (user) => {
    this.setState({
      user:user
    })
  }




  componentDidMount = async () => {
    await this.getPetData()
    await this.getOwnerData()
    
  }
   
 
  
  setCurrentPet = (pet) => {
    this.setState({
      currentPet: pet
    })
  }
  setCurrentOwner = (owner) => {
    this.setState({
      currentOwner: owner
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
       <Header />

       <Switch>
        <Route exact path= '/pets' 
              render={()=> <PetList pets={this.state.pets}
                                    setCurrentPet={this.setCurrentPet} 
                                    faves={this.petFaves}/>}
        />
              
         <Route exact path= '/create-owner' 
              render={()=> <CreateOwner createddUser={this.createAnOwner} />} 
        />  
        
        <Route exact path= '/my-profile' 
              render={()=> <ProfilePage user={this.state.user}
              setCurrentOwner={this.setCurrentOwner} 
              />} 
        />  

        <Route exact path= '/owners' 
              render={()=> <OwnerList 
              setCurrentOwner={this.setCurrentOwner} 
              owners={this.state.owners}

              />} 
        />  
         <Route exact path= '/owners/:id' 
              render={()=> <OwnerDetailsPage 
              setCurrentOwner={this.setCurrentOwner} 
              owners={this.state.owners}
              currentOwner={this.state.currentOwner}

              />} 
        /> 
          <Route 
              exact path='/edit-pet/:id'
              render={() => <EditPet 
                pets={this.state.pets}
                currentPet={this.state.currentPet}
                setCurrentPet={this.setCurrentPet} 
                petData={this.getPetData}/>} 
          />
         

        <Route exact path= '/pets/:id' 
              render={()=> <PetDetailPage pets={this.state.pets}
                                    setCurrentPet={this.setCurrentPet}
                                    currentPet={this.state.currentPet} />} 
        />  
       
       <Route exact path= '/matches' 
       render={()=>  <Matches 
        matchDisplay={this.matchDisplay}/>}>
       </Route>

      </Switch>
    </div>
    );
  }
}

export default App;

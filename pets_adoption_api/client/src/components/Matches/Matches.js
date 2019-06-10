import React, { Component } from 'react';
import '../../Matches.css'


class Matches extends Component {
    constructor(props){
        super(props)
        this.state={
            matches:[],
            we:true
        }
    }
  async componentDidMount(){
     await this.displayOwnerMatch()
    }

     

    // async displayOwnerInfo(){
    //     let owner = await this.props.matchDisplay(2,3,2);
    //     console.log(owner)
    //     this.setState({ userInfo: owner });
    // }
        


    async displayOwnerMatch(){
        let users = await this.props.matchDisplay(2,3,2);
        console.log(users)
        this.setState({ 
            matches: users.matches,
         });

       
    }
        
  renderMatch(){
    const {matches} = this.state;
       let array = matches.map((match, index) =>{
       return( <ul key={index}>
          <li>{match.owner_id}</li>
          {/* <li>{match.owner_id}</li> */}

          
        </ul>
       )})
       return array;
  }
    render() {
      

        return (
            <div className="matchContainer">
    <section className="section">
    <div className="container">
      <h1 className="title">You've Been Matched!</h1>
      <h2 className="subtitle">
      <strong>Based</strong> on your bio, youv'e been matched with these Awesome Pets!</h2>     
    </div>
        </section>
        {/* {this.renderMatch()} */}
        <div className="tile is-ancestor" id="matches">
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
          <p className="title">Australian Cattle</p>
          <img src={require('../../images/pupp1.jpg')} alt="dog1"/>
        </article>
      </div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                <p className="title">Lhasa Apso</p>
                <img src={require('../../images/pupp2.jpg')} alt="dog2"/>
                </article>
              </div>
            </div>
        </div>
    </div>
        </div>
        );
    }
}

export default Matches
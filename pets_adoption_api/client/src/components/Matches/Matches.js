import React, { Component } from 'react';



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
            <div>
            {this.renderMatch()}
            </div>
        );
    }
}

export default Matches
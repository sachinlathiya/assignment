import React, { Component } from "react";

import { Subheader, GridList, GridTile } from 'material-ui';
import ToggleStar from './components/ToggleStar';
import withWidth from 'material-ui/utils/withWidth';
import { config } from '../../modules/utils/Config';
import {isMobile} from 'react-device-detect';


export default class HomeLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false,email:'',password:'',user:[],tilesData:[]};
   
  }
  loaddata(){
    document.body.style.backgroundColor = "White";
    try {
      let userJsonString = localStorage.getItem(config.localStorageKey);
      if (userJsonString) {
        let user = JSON.parse(userJsonString);
       
        console.log(user);
        this.getalldata(user);
      }
    } catch (exception) {
    }
 
}
  async getalldata(user){
   console.log("call api");

    await fetch('https://api.topaptitude.com/api/subscribers', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+user.token
      }
    }).then(res=>res.json())
      .then(res =>{
         
            //tilesData =res[0];
            this.setState({
              tilesData:res
            })

            console.log(this.state.tilesData);
             // alert("Login Successfully");
          //    this.props.authenticate({
          //     name: res.data.fname,
          //     email: res.data.email,
          //     token:res.data.api_token,
          //     isLoggedIn: true
          // });
           
          //     this.props.history.push("/home");
              
              
        
      } );
  }

  componentDidMount() {
    this.loaddata();
    document.body.style.backgroundColor = null;
    document.body.style.backgroundColor = "white";

 }


  render() {
    let col = 0;
    if(isMobile){
   col = 1;
    }else{
     col = 3;
    }
   
    return (
      <GridList cols={col} padding={1}>
       
        {this.state.tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            subtitle={<span>by <b>{tile.author}</b></span>}
            actionIcon={
              <ToggleStar />
            }
          >
            <img src={tile.img} alt={tile.title} />
          </GridTile>
        ))}
      </GridList>
    )
  }
}



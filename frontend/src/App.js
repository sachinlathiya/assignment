import React, { Component } from 'react';

import MainLayout from './modules/main/MainLayout';
import SignIn from './modules/auth/Signin';
import Signup from './modules/auth/Signup';

import HomeLayout from './modules/home/HomeLayout';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { config } from './modules/utils/Config';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


class App extends Component {
  constructor(props) {
    super(props);

    // initially assuming that user is logged out
    let user = {
      isLoggedIn: false
    }

    // if user is logged in, his details can be found from local storage
    try {
      let userJsonString = localStorage.getItem(config.localStorageKey);
      if (userJsonString) {
        user = JSON.parse(userJsonString);
      }
    } catch (exception) {
    }

    // updating the state
    this.state = {
      user: user
    };

    this.authenticate = this.authenticate.bind(this);
  }
  authenticate(user) {
    this.setState({
      user: user
    });

    // updating user's details
    localStorage.setItem(config.localStorageKey, JSON.stringify(user));

    
  }
  
  render() {
    const classes =this.props.classes;
    const history =this.props.history;
    const DashboardLayout = ({ children, ...rest }) => {
      return (
        <MainLayout>
          <HomeLayout />
        </MainLayout>
      )
    }
    return (
      <main>
        <Switch>
          {/* <Route path="/" component={SignIn} exact /> */}
          <Route exact path='/' render={() => <SignIn classes={classes} history={history} authenticate={this.authenticate} />} />
          <Route exact path='/signup' render={() => <Signup classes={classes} history={history} authenticate={this.authenticate} />} />
          <Route path='/home' render={() => (
            this.state.user.isLoggedIn ?
              (<DashboardLayout authenticate={this.authenticate} user={this.state.user} />) :
              (<Redirect to="/" />)
          )} />
          {/* <Route path="/home" component={DashboardLayout} /> */}
          {/* <Route path="/register" component={Register} /> */}
          <Route component={Error} />
        </Switch>
        {/* <SignIn></SignIn> */}
      </main>


    );
  }
}

export default () => {
  const useStyles = makeStyles((theme) => ({
    mt10:{
      marginTop:"50px",
      textAlign: 'center'

          },
      root: {
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
          }
        },
        input:{
  color:"white",
  
        },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    body:{
  backgroundColor:"#1bbc9b",
  height: "100%"
  
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "#1bbc9b",
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:"white",
      color:"#1bbc9b"
    },
    submitr:{
      margin: theme.spacing(3, 0, 2),
      backgroundColor:"#1bbc9b",
      color:"white"
    },
    lable:{
      color:"white",
        marginBottom:"35%",
        fontSize:"20px",
        marginTop:"0px"
    },
    heading:{
        color:"white",
        fontSize:"48px",
        marginBottom:"0px"
  
    },
  
    bt:{
      whiteSpace: "pre-line",
      marginLeft:"20%",

    },
    gen:{
      backgroundColor:"white",
color:"black"
    },
    rem:{
  color:"white"
    }
  }));
  const classes = useStyles();
  const history = useHistory();
  //const authenticate = this.props.authenticate;
  return (
      <App classes={classes} history={history}  />
  )
}

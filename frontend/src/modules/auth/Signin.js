import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useAlert } from "react-alert";
import MainLayout from '../../modules/main/MainLayout';
import HomeLayout from '../../modules/home/HomeLayout';
import { useHistory } from 'react-router-dom';

export default class SignIn extends Component {
    constructor(props) {
      super(props);
      this.state = {open: false,email:'',password:''};
    }



    handleSubmit = () => {   
        if(this.state.email == ''){
            alert("Email is empty"); 
           return false;
        }
        //alert(this.state.password); 
        if(this.state.password == ''){
            alert("Password is empty"); 
            return false;

        }
        fetch('https://api.topaptitude.com/api/login', {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: this.state.email, password: this.state.password})
          }).then(res=>res.json())
            .then(res =>{
                if(res.data != undefined){
                   // alert("Login Successfully");
                   this.props.authenticate({
                    name: res.data.fname,
                    email: res.data.email,
                    token:res.data.api_token,
                    isLoggedIn: true
                });
                 
                    this.props.history.push("/home");
                    
                    
                }else{
                    alert("Login Invalid");
                }
            } );
        
        
        
     }
    handleChange = (event) => {
        console.log(event.target);
       if( event.target.name == "email"){
        this.setState({
           email: event.target.value,
        });
        
    } else{
        this.setState({
            password: event.target.value,
         });
         console.log(this.state);
    }
      };

      componentDidMount() {
       // this.loaddata();
        document.body.style.backgroundColor = "#1bbc9b";
    
     }

render(){
   
   
    const classes = this.props.classes;
  return (
    <Container className={classes.body}component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography class={classes.heading} component="h1" variant="h2">
          PWA
        </Typography>
        <Typography class={classes.lable} component="h1" variant="h6">
          Catchpharse
        </Typography>
        
        {/* <form onSubmit={this.handleSubmit} className={classes.form} noValidate> */}
          <TextField
           className={classes.root}
            variant="outlined"
            value={this.state.email}
            InputProps={{
                className: classes.input
              }}
              InputLabelProps={{
                style: {
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  width: '100%',
                  color: 'white'
                } }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Login Id"
            name="email"
            autoComplete="email"
            onChange={this.handleChange.bind(this)}
            autoFocus
          />
          <TextField
            className={classes.root}
            variant="outlined"
            margin="normal"
            value={this.state.passsword}
            onChange={this.handleChange.bind(this)}
            InputProps={{
                className: classes.input
              }}
            InputLabelProps={{
                style: {
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  width: '100%',
                  color: 'white'
                } }}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel className={classes.rem}
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleSubmit.bind(this)}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>

            </Grid>
            <Grid item>
              <Link className={classes.rem} href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        {/* </form> */}
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );

 
}

}


import React from 'react';
import { Redirect } from 'react-router';

import { config } from '../../modules/utils/Config';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";


export default class Signup extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            fname: '',
            lname: '',
            email: '',
            gender: 'male',
            dob: new Date(),
			password: '',
			error: '',
            fireRedirect: false,
		};

        this.handleFNameChange = this.handleFNameChange.bind(this);
        this.handleLNameChange = this.handleLNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleDobChange = this.handleDobChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const params = {
            fname: this.state.fname,
            lname: this.state.lname,
			email: this.state.email,
            password: this.state.password,
            gender:this.state.gender,
            dob:this.state.dob,
        };
        console.log(params);
        fetch('https://api.topaptitude.com/api/register', {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
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
                     alert("Registration Failed");
                 }
            });
        
	}

	handleFNameChange(e) {
		this.setState({
			fname: e.target.value
		});
    }
    handleLNameChange(e) {
		this.setState({
			lname: e.target.value
		});
	}
    handleGenderChange(e) {
		// this.setState({
		// 	gender: e.target.value
		// });
    }
	handleEmailChange(e) {
		this.setState({
			email: e.target.value
		});
    }
    
    handleDobChange= date => {
        this.setState({
          dob: date
        });
      };

	handlePasswordChange(e) {
		this.setState({
			password: e.target.value
		});
	}

	render() {
        const classes= this.props.classes;
		return (
			<Container component="main" maxWidth="xs">
      <CssBaseline />
     
      <div className={classes.paper}>
    
     
       
      <Typography style={{fontSize: "14px",margin:"10px",fontWeight:700}}  classes={classes.mt10} >
        What's your name?
        </Typography>
          <Grid  alignItems="center"  justify="center" container spacing={2}>
         
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={this.handleFNameChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={this.handleLNameChange}
              />
            </Grid>
            <Grid alignItems="center"  justify="center" item xs={12} sm={12}>
       
      </Grid>
      </Grid>
        
            <div style={{textAlign: "center"}}>
            <Typography style={{fontSize: "14px",margin:"10px",fontWeight:700}} classes={classes.mt10} >
        And your gender?
        </Typography>
            <ToggleButtonGroup onChange={this.handleGenderChange} type="radio">
        <ToggleButton classes={classes.gen} value={"male"}>
          Male
        </ToggleButton>
        <ToggleButton calss={classes.gen1} value={"female"}>Female</ToggleButton>
        

      </ToggleButtonGroup>

            </div>
            <div style={{textAlign: "center"}}>
            <Typography style={{fontSize: "14px",margin:"10px",fontWeight:700}} classes={classes.mt10} component="h1" variant="h6">
        What's your date of birth?
        </Typography>
        <DatePicker
        style={{padding: "10px"}}
        selected={this.state.dob}
        onChange={this.handleDobChange}
      />
            </div>
            <Typography style={{fontSize: "14px",margin:"10px",fontWeight:700}}  classes={classes.mt10} >
        Your account details?
        </Typography>
        <Grid  alignItems="center"  justify="center" container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={this.handleEmailChange}
              />
              </Grid>
        
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handlePasswordChange}
              />
            </Grid>
           
        
             {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitr}
            onClick={this.handleSubmit.bind(this)}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
      
  </div>
      <Box mt={5}>
       
      </Box>
    </Container>
		);
	}
}
import React, { Component } from 'react';

import './App.css';
//import * as firebase from 'firebase';
import Title from './Title';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Divider,Button, TextField } from '@material-ui/core';
import history from './history';
import Container from '@material-ui/core/Container';
import firebase from './config'

class AddCourse extends Component  {
    state={
      courseName:'',
      list:[],
    }
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }; 
  addCourse=()=>{
     
      //alert(JSON.stringify(this.state.courseName))
      let sub = this.state.courseName;
       
      console.log('course'+sub)
      
      if(sub === "")
        {
          alert("Your course name is empty")
        
        }
      else{
       
        /* data
        .on('value', datasnap => {
          if(datasnap.val())
            {
            this.setState({list: Object.values(datasnap.val())}, function() {
              
              console.log("notifications: "+this.state.list);
            
            });
          }
        }) */
        const data =  firebase.database().ref("Courses/"+sub)
        data.update(
          {
            ActiveStatus: 'Active'
          } )
          console.log("Added")
       }
  }
  render() {
    
    const classes = makeStyles((theme) => ({
        paper: {
          marginTop: '10%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
       
        /* form: {
          width: '100%',
         
        }, */
        submit: {
          marginTop: '10%',
        },
        image: {
          height: '30%',
          width: '30%',
        }
      }));

  return (
    <Container component="main" maxWidth="xs">
    
    <div className={classes.paper}>
        {/* <AppBar
              position="absolute"
              //className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
            >
              <Toolbar>
                
                <Typography color="inherit" noWrap>
                  ADD COURSE
                </Typography>
                
              </Toolbar>
        </AppBar> */}

        <form >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="coursename"
            label="Course Name"
            name="courseName"
            //value={this.state.email}
            onChange={this.handleInputChange}
            autoComplete="coursename"
            autoFocus
            
          />
            <Button
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.addCourse}
          >
            ADD COURSE
          </Button>
        </form>  
    </div>
   </Container>   
  );
}
}
export default AddCourse;
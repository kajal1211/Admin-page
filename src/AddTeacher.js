import React, { Component } from 'react';

import './App.css';
//import * as firebase from 'firebase';
import Title from './Title';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Divider,Button, TextField } from '@material-ui/core';
import history from './history';
import Container from '@material-ui/core/Container';
import firebase from './config'
import {Select, InputLabel, MenuItem} from '@material-ui/core'

class AddStudent extends Component  {
  state={
    courseName:'',
    list:[],
    courseNameList: [],
    selectValue: 'CDS June 2019',
    teacherName: '',
    teacherEmail: '',
    teacherContact: '',
    
  }
  componentDidMount() {
    
    this.state.data = firebase.database().ref("Courses")
    this.state.data
    .on('value', datasnap => {
      if(datasnap.val())
        {
        this.setState({courseNameList: Object.keys(datasnap.val())}, function() {
          
          //console.log("Keys: "+this.state.courseNameList);
        
        });
      }
     
    })
    }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }; 
  addTeacher=()=>{
     
      //alert(JSON.stringify(this.state.courseName))
      let sub = this.state.selectValue;
      var Name = this.state.teacherName
      var Email = this.state.teacherEmail
      var Contact = this.state.teacherContact
       
      //console.log('course'+sub)
      
         
      if(sub === "" || Name==="" || Email==="" || Contact==="")
        {
          alert("Fill all the details...")
        
        }
      else{
        const data =  firebase.database().ref("Courses/"+sub+"/Teacher")
        const Teachers = firebase.database().ref("Teachers")
        data.push().set(
          {
            Name: Name,
            Contact: Contact,
            Email: Email,
          } )
        if(window.confirm("Enrolling this teacher for the first time in this institute"))  
          {  
            Teachers.update(
              {
                "100": Name
              }
            )  
          //console.log("Added")
       }}
  }

  handleChange=(e)=>{
    this.setState({selectValue:e.target.value});
  
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

        <InputLabel id="label">Course Names</InputLabel>
          <Select labelId="label" id="select" value={this.state.selectValue} 
            onChange={this.handleChange} >
          {this.state.courseNameList.map((e, i) => {
            return <MenuItem key={i++} value={e}>{e}</MenuItem>;
            })}
          </Select>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="teacherName"
            label="Teacher Name"
            name="teacherName"
            //value={this.state.email}
            onChange={this.handleInputChange}
            autoComplete="teacherName"
            autoFocus
            
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
           
            id="teacherEmail"
            label="Teacher Email"
            name="teacherEmail"
            //value={this.state.email}
            onChange={this.handleInputChange}
            autoComplete="teacherEmail"
            autoFocus
            
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="teacherContact"
            label="Student Contact"
            name="teacherContact"
            //value={this.state.email}
            onChange={this.handleInputChange}
            autoComplete="teacherContact"
            autoFocus
            
          />

            <Button
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.addTeacher}
          >
            ADD TEACHER
          </Button>
        </form>  
    </div>
   </Container>   
  );
}
}
export default AddStudent;

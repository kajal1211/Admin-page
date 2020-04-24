import React, { Component } from 'react';

import './App.css';
//import * as firebase from 'firebase';
import Title from './Title';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Divider,Button, TextField } from '@material-ui/core';
import history from './history';
import Container from '@material-ui/core/Container';
import firebase from './config'

class DeleteTeacher extends Component  {
    state={
      coursename:'',
      teachername:  '',
      list:[],
      teacherslist: [],
      teacherslistkeys: [],
      data: '',
    }
    componentDidMount() {
    
        this.state.data = firebase.database().ref("Teachers")
        this.state.data
        .on('value', datasnap => {
          if(datasnap.val())
            {
            this.setState({teacherslist: Object.values(datasnap.val())}, function() {
              
              console.log("teacherlist: "+this.state.teacherslist);
            
            });
  
            
  
            this.setState({teacherslistkeys: Object.keys(datasnap.val())}, function() {
              
              console.log("Keys: "+this.state.teacherslistkeys);
            
            });
          }
         
        })
        } 
      
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }; 
  deleteTeacher=()=>{
     
    let activeState = 0;
    let i = 0;
    const teachername = this.state.teachername
    const coursename = this.state.coursename
    if(window.confirm("Are you sure you wanna delete this item?"))
    {      
          const ex = this.state.teacherslist;
          console.log("ex: "+ ex)
          ex.map((item,index) => {
             //console.log("item: "+item)
            if(item.match(teachername)) {
                
              activeState=1;  
                //console.log("key: " +index)
              i=index;  
                  }
                })
          if(activeState==0)
            {
                console.log("not found")
            }
          else{
              this.state.data.child(this.state.teacherslistkeys[i]).remove()
              console.log("removed")
          }  
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
            id="teachername"
            label="Teacher Name"
            name="teachername"
            //value={this.state.email}
            onChange={this.handleInputChange}
            autoComplete="teachername"
            autoFocus
            
          />

        
            <Button
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.deleteTeacher}
          >
            DELETE TEACHER
          </Button>

        </form>  
    </div>
   </Container>   
  );
}
}
export default DeleteTeacher;
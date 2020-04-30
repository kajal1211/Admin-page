import React ,{Component} from 'react'
import { render } from '@testing-library/react';
import firebase from './config'
import {Button, Typography, TextField} from '@material-ui/core'
import {Card, View} from '@material-ui/core'
import {Select, InputLabel, MenuItem} from '@material-ui/core'


export default class DeleteUpcomingCourse extends Component{
    state={
        selectValue:'CDS June 2019',
        studentList:[],
        courseListKeys: [],
        data:'',
        array:[],
       
        courseList: [],
        
        courseInfo: [],
    }
    componentDidMount() {
        var sub = this.state.selectValue
        const data = firebase.database().ref("Courses/"+sub)
        const courseNames = firebase.database().ref("Courses")
        courseNames
        .on('value', datasnap => {
          if(datasnap.val())

            this.setState({courseListKeys: Object.keys(datasnap.val())}, function() {
              
              //console.log("List: "+this.state.courseListKeys);
             
            });
          })

          data
          .on('value', datasnap => {
          if(datasnap.val())

            this.setState({courseInfo: Object.values(datasnap.val())}, function() {
              
              //console.log("List1 : "+this.state.courseInfo);
             
            });
          })
         
        

    }
    handleChange=(e)=>{
      this.setState({selectValue:e.target.value},function(){
        let sub = this.state.selectValue
        var data = firebase.database().ref("Courses/"+sub)
        
        data
        .on('value', datasnap => {
          if(datasnap.val())
            {
            this.setState({courseInfo: Object.values(datasnap.val())}, function() {
              
              //console.log("List1: "+this.state.courseInfo);
             
            });        
            
          }
          else{
            this.setState({courseInfo: ''}, function(){
              //console.log("notifications: "+this.state.notificationList)
            })
           
          }
        })
      
      });
    
  } 
  
    renderInfo=()=>{
      var i=0;
      
      //var length = this.state.courseInfo.length
      
      const card={
        margin: '5%',
      }
      //console.log('l:'+length)
      
      return(
   
        <Card key={i++} style={card}>
          {"Name: "}{this.state.selectValue}<br />
          {"Active Status: "}{this.state.courseInfo[0]}<br />
          {"Details: "}{this.state.courseInfo[1]}<br />
             
        </Card>

      )
      
    }
    render() {
      
      return (
        <div>
          <InputLabel id="label">Course Names</InputLabel>
          <Select labelId="label" id="select" value={this.state.selectValue} 
            onChange={this.handleChange} >
          {this.state.courseListKeys.map((e, i) => {
            return <MenuItem key={i++} value={e}>{e}</MenuItem>;
            })}
          </Select>
              
          {this.renderInfo()}    
        
      </div>      
          
        );
      }
    }

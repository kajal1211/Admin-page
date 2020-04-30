import React ,{Component} from 'react'
import { render } from '@testing-library/react';
import firebase from './config'
import {Button, Typography, TextField} from '@material-ui/core'
import {Card, View} from '@material-ui/core'
import {Select, InputLabel, MenuItem} from '@material-ui/core'


export default class DeleteUpcomingCourse extends Component{
    state={
        selectValue:'CDS 2019',
        studentList:[],
        courseListKeys: [],
        data:'',
        array:[],
        englishMarks:'',
        gkMarks:'',
        mathsMarks:'',
        courseList: [],
        marks: '',
        gatMarks: '',

    }
    componentDidMount() {
        
        this.state.data = firebase.database().ref("Courses")
        console.log("hiii")
        this.state.data
        .on('value', datasnap => {
          if(datasnap.val())
            {
            this.setState({courseList: Object.values(datasnap.val())}, function() {
              
              console.log("List: "+this.state.courseList);
             
            });

            this.setState({courseListKeys: Object.keys(datasnap.val())}, function() {
              
              console.log("List: "+this.state.courseListKeys);
             
            });
          }
         
        })

    }

    renderInfo=()=>{
      var i=0;
      
      var length = this.state.courseList.length
      
      const card={
        margin: '5%',
      }
      //console.log('l:'+length)
      
      return(
        <div>
        { length > 0
        ?
       
        <ul>
          {this.state.courseList.map((listitem, index) => (
             
            <Card key={i++} style={card}>
              {"Name: "}{this.state.courseListKeys[index]}<br />
              {"Active Status: "}{listitem.ActiveStatus}<br />
              {"Details: "}{listitem.Details}<br />
           {/*    <div>
                {listitem.Students.length > 0
                ?<h5>student FOUND</h5>
                :<h5>No student FOUND</h5>
                }
              </div> */}
            </Card>
                ))}
        </ul>
         
        
        
        :<h5>NO UPCOMING COURSE FOUND</h5>
        }
        </div>
      )
      
    }
    render() {
      
      return (
        <div>
              
          {this.renderInfo()}    
        
      </div>      
          
        );
      }
    }

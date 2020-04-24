import React, {Component} from 'react'
import firebase from './config'
import Carousel from 'react-elastic-carousel';
import logo from './images/ApexLogo.jpg'
import flowers from './images/flowers.jpg'
import { AppBar, Toolbar, Typography, Divider, Button, IconButton, Container} from '@material-ui/core';
import Sidebar from './sidebar'
export default class AdminProfile extends Component{
  state={
    children: [],
    activeItemIndex: 0,
    data : '',
    mylist : [],
    email: this.props.location.email,
  }
 
        render () {
          
          //console.log('email: '+email)
          const email = this.state.email
          return (
            <Container component="main" maxWidth="xl">
           {/*  <AppBar
              position="absolute"
              //className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
            >
              <Toolbar disableGutters={!this.state.open}>
                
                <Typography color="inherit" noWrap>
                  ADMIN PROFILE
                </Typography>
                <Typography className='subtitle1'>
                  {JSON.stringify(email)}
                </Typography>
              </Toolbar>
            </AppBar> */}

          
              <Sidebar/>
             
                <Carousel>
                
                    <img src={logo} style={{backgroundColor:'blue',height: '20%', width: '30%'}} /> 
                    <img src={flowers} style={{backgroundColor:'blue',height: '20%', width: '30%'}} /> 
                </Carousel>
             
              
           
          </Container>
          )
        }
    
  } 
    

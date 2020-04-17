/* import React from 'react'


function Sidebar() {
  return (
    <div style={{width: '20%'}}>  
    <ul style={{backgroundColor:'#ffff00'}}>
        <li>User Profile</li> 
        <li>Add student</li>
    </ul> 
    </div>   
  )
}


export default Sidebar */

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PeopleIcon from '@material-ui/icons/People';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteOutline from '@material-ui/icons/DeleteOutline'

export const mainListItems = (
  <div>

  
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Admin Profile" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    
    <ListItem button>
      <ListItemIcon>
        <AddCircleOutline/>
      </ListItemIcon>
      <ListItemText primary="Add Course" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddCircleOutline/> 
      </ListItemIcon>
      <ListItemText primary="Add Teacher" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddCircleOutline/>
      </ListItemIcon>
      <ListItemText primary="Add Student" />
    </ListItem>
  </div>
);

export const thirdListItems = (
  <div>
    
    <ListItem button>
      <ListItemIcon>
        <DeleteOutline/>
      </ListItemIcon>
      <ListItemText primary="Delete Course" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteOutline/>
      </ListItemIcon>
      <ListItemText primary="Delete Teacher" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteOutline/>
      </ListItemIcon>
      <ListItemText primary="Delete Student" />
    </ListItem>
  </div>
);
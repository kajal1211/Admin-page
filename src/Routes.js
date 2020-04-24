import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import SignIn from './SignIn'
import history from './history'
import AddCourse from './AddCourse';
import AddStudent from './AddStudent'
import AdminProfile from './AdminProfile'
import AddTeacher from './AddTeacher'
import DeleteTeacher from './DeleteTeacher'
import DeleteStudent from './DeleteStudent'
export default class Routes extends Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={SignIn} />
                    <Route path="/AddCourse" component={AddCourse} />
                    <Route path="/AddStudent" component={AddStudent} />
                    <Route path="/AdminProfile" component={AdminProfile} />
                    <Route path="/AddTeacher" component={AddTeacher} />
                    <Route path="/DeleteTeacher" component={DeleteTeacher} />
                    <Route path="/DeleteStudent" component={DeleteStudent} />
                </Switch>
            </Router>
        )
    }
}
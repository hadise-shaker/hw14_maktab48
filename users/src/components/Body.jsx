import React from 'react';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import MainTable from '../Hoc/MainTable';
import UsersDetail from "./UsersDetail"
import NavBar from "../components/NavBar"
function Body() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <MainTable/>
                </Route>
                <Route path="/:id">
                    <UsersDetail/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Body;
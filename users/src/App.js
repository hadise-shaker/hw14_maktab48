import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainTable from "./Hoc/MainTable.jsx";
import UsersDetail from "./components/UsersDetail";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={MainTable} />

        <Route path="/:id" component={UsersDetail} />
      </Switch>
    </Router>
  );
}

export default App;

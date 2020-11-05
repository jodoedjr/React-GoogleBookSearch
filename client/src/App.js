// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import MyNavBar from "./components/MyNavBar";
import './App.css';
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <BrowserRouter>
    <MyNavBar/>
      <Switch>
        <Route exact path={["/", "/index", "/search"]}><Search/></Route>
        <Route exact path={["/saved"]}><Saved/></Route>
        <Route><NoMatch/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React, { Component ,Fragment} from 'react';
import {HashRouter as Router,Route,NavLink,Switch} from "react-router-dom";

import "./reset.css";
import "./app.scss";

import Home from "./components/home";
import Order from "./components/order";
import My from "./components/my";
import List from "./components/list";
// console.log(Home);




class App extends Component {
  render() {
    return (
    <Router>
      <Fragment>
        <Switch> {/* 精准匹配 */}
          <Route path="/home" component = {Home}/>
          <Route path="/order" component = {Order}/>
          <Route path="/my" component = {My}/>
          <Route path="/list" component = {List}/>
          {/* <Route path="/" to = "/home/"/> */}

        </Switch>
        <footer>
            <ul>
              <li><NavLink to="/home">首页</NavLink></li>
              <li><NavLink to="/list">详情</NavLink></li>
              <li><NavLink to="/order">订阅</NavLink></li>
              <li><NavLink to="/my">我的</NavLink></li>
            </ul>
        </footer>
      </Fragment>
      </Router>
    );
  }
}

export default App;

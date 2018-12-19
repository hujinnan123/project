import React, { Component ,Fragment} from 'react';
import {HashRouter as Router,Route,NavLink,Switch} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";


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
      <Provider store={store}>
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
                  <li>
                    <NavLink to="/home">
                      <i className="iconfont">&#xe64c;</i> 
                      <span>首页</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/list">
                      <i className="iconfont">&#xe7f9;</i>                   
                      <span>分类</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/order">
                      <i className="iconfont">&#xe606;</i>                   
                      <span>购物车</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/my">
                      <i className="iconfont">&#xe604;</i>                   
                      <span>我的酒仙</span>
                    </NavLink>
                  </li>
                </ul>
            </footer>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React, { Component ,Fragment} from 'react';
import {HashRouter as Router,Route,NavLink,Switch,Redirect} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";


import "./reset.css";
import "./app.scss";

// import Header from "./components/home/children/header"

import Home from "./components/home";
import Order from "./components/order";
import My from "./components/my";
import List from "./components/list";
// console.log(Home);

/* 
https://mlist.jiuxian.com/m_v1/search/getSuggestKeyword?jsoncallback=jQuery16201406221567952517_1545384336934&wd=海之蓝&_=1545384344142 
https://mlist.jiuxian.com/m_v1/search/getSuggestKeyword?jsoncallback=jQuery16201406221567952517_1545384336933&wd=hu&_=1545384343602
https://mlist.jiuxian.com/m_v1/search/getSuggestKeyword?jsoncallback=jQuery16201406221567952517_1545384336932&wd=h&_=1545384343273

*/


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
              <Redirect path="/" to="/home"/>

            </Switch>
            <div className="h-footer">
                <ul className="h-menu">
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
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;

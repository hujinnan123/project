import React,{Component,Fragment} from "react" ;
import {HashRouter as Router,Route,Switch,NavLink,Redirect} from "react-router-dom";

import "./style/n.css"
export default class Home extends Component{
    constructor(){
        super()

        this.state = {
            
        }
    }
    render(){
        return(
            <Fragment>
             <div class="publicHead" id="head">
                <div class="topHeader">
                    <a href="/home" class="linkleft"><i class="pubIcon back"></i></a>
                    <span class="brand">购物车</span>
                    <a class="navBar" href="#">H</a>
                </div>
                <div class="nav ">
                    <li className="home"><i></i><span>首页</span><a href="#/home"></a></li>
                    <li className="topsearch"><i></i><span>搜索</span><a href="#/list"></a></li>
                    <li className="cart"><i></i><span>购物车</span><a href="#/order"></a></li>
                    <li className="commuser"><i></i><span>我的酒仙</span><a href="#/my"></a></li>
                </div>
                <div class="topCatTip clearfix">
                    <div class="topCatTipBd"><i class="pubIcon"></i>自营商品实付满100元免运费，偏远地区满500免运费
                    </div>
                </div>
            </div>   
            <div id="cart_container">
                <div class="catKongBox">
                    <i></i>
                    <p>购物车还是空的</p>
                    <p><span>快去逛逛吧~</span></p>
                    <a href="#/home">促销活动</a>
                </div>
            </div>
            </Fragment>
        )
    }
}
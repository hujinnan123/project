import React,{Component,Fragment} from "react" ;
import "./style/niu.css";

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
                    <div class="head clearfix">
                        <a class="back" href="#/home">&lt;</a>
                        <h2 class="headTitle">选酒</h2>
                        <a class="navBar" href="#"><i>H</i></a>
                    </div>
                </div>
                <div class="listSearcHeader">
                	<div class="headSearch clearfix">
				        <div class="searchInput">
                            <i class="sIcon" id="searchIcon"></i>
                            <a href="#/list/indexOne"><b id='search_text'>酒业三大佬代言，酒友鼎力推荐——三人炫</b></a>
                        </div>
			        </div>
                </div>
                <div class="contentFrame" id="__fenlei_fenlei">
        <ul class="list clearfix">
            <li class="bj first">
                <a href="#">
                	<i></i>
                	<span>白酒</span>
                </a>
            </li>
            <li class="ptj">
                <a href="#">
               
                    <i></i>
                    <span>葡萄酒</span>
                </a>
            </li>
            <li class="yj">
                <a href="#">
                
                    <i></i>
                    <span>洋酒</span>
                </a>
            </li>
            <li class="pj first">
                <a href="#">
                    <i></i>
                    <span>整箱购</span>
                </a>
            </li>
            <li class="bjj">
                <a href="#">
                    <i></i>
                    <span>老酒</span>
                </a>
            </li>
            <li class="jj">
                <a href="#">
                    <i></i>
                    <span>清仓特卖</span>
                </a>
            </li>
            <li class="sIcon1 first">
                <a href="#">
                    <i></i>
                    <span>海外直采</span>
                </a>
            </li>
            <li class="sIcon2">
                <a href="#">
                    <i></i>
                    <span>精美大坛</span>
                </a>
            </li>
            <li class="sIcon3">
                <a href="#">
                    <i></i>
                    <span>红酒整箱</span>
                </a>
            </li>
            <li class="sIcon4 first">
                <a href="#">
                    <i></i>
                    <span>值得买</span>
                </a>
            </li>
            <li class="sIcon5">
                <a href="#">
                    <i></i>
                    <span>销量排行</span>
                </a>
            </li>
            <li class="sIcon6">
                <a href="#">
                    <i></i>
                    <span>礼尚往来</span>
                </a>
            </li>
        </ul>
    </div>
            </Fragment>
        )
    }
}
import React,{Component,Fragment} from "react" ;
import "./style/niu.css";
export default class Home extends Component{
    render(){
        return(
            <Fragment>
                <div className="publicHead" id="head">
                    <div className="head clearfix">
                        <i className="iconfont">&#xe799;</i>   
                        <h2 className="headTitle">选酒</h2>
                        <i className="iconfont">&#xe66d;</i>
                    </div>
                </div>
                <div className="listSearcHeader">
                	<div className="headSearch clearfix">
			        <div className="searchInput">
                                        <i className="sIcon" id="searchIcon"></i>
                                        <b id='search_text'>酒业三大佬代言，酒友鼎力推荐——三人炫</b>
                                </div>
			</div>
                </div>
                <div className="contentFrame" id="__fenlei_fenlei">
                <ul className="list clearfix">
                        <li className="bj first">
                                <i></i>
                                <span>白酒</span>
                        </li>
                        <li className="ptj">
                                <i></i>
                                <span>葡萄酒</span>
                        </li>
            <li className="yj">
                
                
                    <i></i>
                    <span>洋酒</span>
                
            </li>
            <li className="pj first">
                
                    <i></i>
                    <span>整箱购</span>
               
            </li>
            <li className="bjj">
                
                    <i></i>
                    <span>老酒</span>
                
            </li>
            <li className="jj">
                
                    <i></i>
                    <span>清仓特卖</span>
                
            </li>
            <li className="sIcon1 first">
                
                    <i></i>
                    <span>海外直采</span>
                
            </li>
            <li className="sIcon2">
                
                    <i></i>
                    <span>精美大坛</span>
                
            </li>
            <li className="sIcon3">
                
                    <i></i>
                    <span>红酒整箱</span>
                
            </li>
            <li className="sIcon4 first">
                
                    <i></i>
                    <span>值得买</span>
                
            </li>
            <li className="sIcon5">
                
                    <i></i>
                    <span>销量排行</span>
                
            </li>
            <li className="sIcon6">
                
                    <i></i>
                    <span>礼尚往来</span>
                
            </li>
        </ul>
    </div>
            </Fragment>
        )
    }
}
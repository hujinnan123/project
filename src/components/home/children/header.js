import React,{Component} from "react";
import "../style/header.scss";
import ImgSrc from "./logo.jpg"

export default class Header extends Component {

    render(){
        return (
            
            <div className="header-top">
                <div className="logo">
                    <img src={ImgSrc} alt="mei"/>
                </div>
                <div className="seach">
                    <i className="iconfont">&#xe61b;</i>
                    <span>酒业三大佬代言，酒友鼎力推荐——三人炫</span>
                </div>
            </div>
            
        )
    }
} 
import React,{Component} from "react";
import "../../../../node_modules/swiper/dist/css/swiper.css";
import "../style/hotlist.scss";

export default class Hotlist extends Component{
    render(){
        return (
            <div className="h-hotlist">
                <div className="swiper-container" ref="swiper_banner">
                    <ul className="swiper-wrapper">
                        <li className="swiper-slide h-item">
                            <div className="h-item-pic">
                                <img src="https://img08.jiuxian.com/2014/0409/083ad39270334408b0594686edc6fe994.jpg" alt="mei"/>
                            </div>
                            <div className="h-item-title">
                                <span>40°轩尼诗新点干邑白兰地700ml</span>
                            </div>
                            <div className="h-item-price">
                                <span>￥234</span>
                                <span className="h-del">￥278</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
import React,{Component} from "react";
import "../style/newsBox.scss"
import "../../../../node_modules/swiper/dist/css/swiper.css";
import Swiper from "swiper";

export default class Newsbox extends Component {
    render(){
        return (
            <div className = "h-newsbox">
                <div className = "h-newsbox-title">
                    <img src="https://img09.jiuxian.com/bill/2017/1109/acb646caea3d4325b3664c9142852543.jpg" alt="mei"/>
                </div>
                <div className="h-newsbox-swiper">
                    <div className="swiper-container" ref="swiper_newBox">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <p>酒仙网线下实体火爆招商中</p>                                    
                            </div>
                            <div className="swiper-slide">
                                <p>2018年酒仙年度好酒友微故事</p>                                    
                            </div>
                            <div className="swiper-slide">
                                <p>APP首单满100送100活动规则 点击查看!</p>
                            </div>
                            <div className="swiper-slide">
                                <p>酒仙网线下实体火爆招商中</p>                                    
                            </div>
                            <div className="swiper-slide">
                                <p>2018年酒仙年度好酒友微故事</p>                                    
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
    componentDidMount(){
        new Swiper(this.refs.swiper_newBox,{
            autoplay:{
                delay:1000,
                stopOnLastSlide:false,
                disableOnInteraction:false
            },
            direction : 'vertical',
            observer:true,
            observerParents:true
        })
    }
}
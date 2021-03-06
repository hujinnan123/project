import React,{Component} from "react";
import "../style/swiper.scss";
import "../../../../node_modules/swiper/dist/css/swiper.css";
import Swiper from "swiper";

export default class Swipe extends Component {
    render(){
        let { swiperItem } = this.props;
        // console.log(swiperItem)
        return(
            <div className="content-swiper h-swiper">
                <div className="swiper-container" ref="swiper_banner">
                    <div className="swiper-wrapper">
                        {
                            swiperItem.length>0? swiperItem.map((item,index)=>{
                                return  <div className="swiper-slide" key={index}>
                                            <img src={item.img} alt="mei" key={index} />
                                        </div>
                            }) : "正在加载"
                        }           
                    </div>
                    {/* <!-- 如果需要分页器 --> */}
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        new Swiper(this.refs.swiper_banner,{
                autoplay:{
                    delay:3000,
                    stopOnLastSlide:false,
                    disableOnInteraction:false
                },
                // loop: true, // 循环模式选项
                // 如果需要分页器
                
                pagination: {
                    el: '.swiper-pagination',
                },
                observer:true,
                observerParents:true
        })
    }
}
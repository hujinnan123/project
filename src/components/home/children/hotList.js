import React,{Component} from "react";
import "../../../../node_modules/swiper/dist/css/swiper.css";
import "../style/hotlist.scss";
import Swiper from "swiper";
export default class Hotlist extends Component{
    render(){
        let { hostList ,tabBar} = this.props
        // console.log(hostList)
        return (
            <div className="h-hotlist">
                <div className="swiper-container" ref="swiper_hostList">
                    <div className="swiper-wrapper">
                    {
                        hostList.length>0? hostList.map((item,index)=>{
                            return <div className="swiper-slide h-item" key={index}>
                                            <strong></strong>
                                        <div style={{position:"absolute",Zindex:"1",background:"#fff"}}>
                                            <div className="h-item-pic" >
                                                <img src={item.img} alt="mei" />
                                            </div>
                                            <div className="h-item-title" >
                                                <span >{item.name}</span>
                                            </div>
                                            <div className="h-item-price" >
                                                <span >{item.price}</span>
                                                <span className="h-del">{item.yprice}</span>
                                            </div>
                                        </div>                                       
                                        
                                    </div>
                        }):<div className="swiper-slide h-item">
                                <strong></strong>
                            </div>
                                
                            
                            
                            
                            
                    }
                    <div className="swiper-slide h-item"></div>
                    </div>
                </div>

                <div className="h-hotlist-pic">
                    <div className="h-pic-one">
                        <img src="https://img07.jiuxian.com/bill/2018/1220/d103b11e20b748e9a619a67835af296a.jpg" alt="mei" />
                        <img src="https://img08.jiuxian.com/bill/2018/1219/7a5793fafc284be3a46612aa7113ebe2.jpg" alt="mei" />
                        <img src="https://img07.jiuxian.com/bill/2018/1218/a329477cfd8041f08f2f7e5ae363bf12.png" alt="mei" />
                        {/* <img src="https://img07.jiuxian.com/bill/2018/1218/a329477cfd8041f08f2f7e5ae363bf12.png" alt="mei" /> */}
                  </div>
                </div>

                <div className="h-hotlist-item">
                    <div className="h-hotlist-item-le">
                        <img src="https://img08.jiuxian.com/bill/2018/1126/c3e975357a6742da8d93e9a34f5f9389.jpg" alt="mei"/>
                    </div>
                    <div className="h-hotlist-item-ri">
                        <img src="https://img06.jiuxian.com/bill/2018/1220/bfc3de9b70a24df3aa91130743660c0a.jpg" alt="mei" />
                        <img src="https://img07.jiuxian.com/bill/2018/1218/af4f40ab44e14047875cb7b96e06e4f9.jpg" alt="mei" />
                    </div>
                </div>

                <div className="swiper-container" ref="swiper_tab">
                    <div className="swiper-wrapper">
                    {
                        tabBar.length>0? tabBar.map((item,index)=>{
                            return <div className="swiper-slide" key={index}>
                                        <div className="tab_pic" >
                                            <img src={item.img} alt="mei" />
                                        </div>
                                    </div>
                        }): <div className="height">
                                <strong></strong>
                            </div>
                    }
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        new Swiper(this.refs.swiper_hostList,{
            slidesPerView : 3,
            slidesOffsetBefore : 5,
            observer:true,
            observerParents:true,
        })
        setTimeout(()=>{
            new Swiper(this.refs.swiper_tab,{
            
                slidesPerView : 2.5,
                slidesOffsetBefore : 5,
                // observer:true,
                // observerParents:true,
            })
        },800)
        
    }
}






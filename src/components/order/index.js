import React,{Component,Fragment} from "react" ;

import "./style/n.css"
export default class Home extends Component{
    render(){
        return(
            <Fragment>
            <div className="publicHead">
                <div className="topHeader">
                <i className="iconfont">&#xe799;</i>    
                    <span className="brand">购物车</span>
                    <i className="iconfont">&#xe66d;</i>
                </div>
                
                <div className="topCatTip clearfix">
                    <div className="topCatTipBd">
                    <i className="iconfont"> &#xe625;</i>
                   
                        <i>自营商品实付满100元免运费，偏远地区满500免运费</i>
                    </div>
                </div>
            </div>   
            <div id="cart_container">
                <div className="catKongBox">
                    <i></i>
                    <p>购物车还是空的</p>
                    <p><span>快去逛逛吧~</span></p>
                </div>
            </div>
            </Fragment>
        )
    }
}
import React,{Component} from "react" ;
import {connect} from "react-redux";
import BScroll from "better-scroll";

import Header from "./children/header";
import Swipe from "./children/swiper";
import Nav from "./children/nav";
import Showinfo from "./children/showInfo";
import Newsbox from "./children/newsBox";
import Time from "./children/time";
import Hotlist from "./children/hotList";
import GoodList from "./children/goodList";

import {
    swriper_action,
    navBar_action,
    hostList_action,
    tabBar_action
}
from "../../action/actionCreator";
// console.log(swriper_action());


class Home extends Component{

    render(){
        let {swiperList,navBarList,hostList,tabBarList} = this.props;
        // console.log(hostList);
        return(
            <div className="wrapper">
            
                <div className="content">
                    <Header/>                    
                    <Swipe swiperItem = {swiperList}/>
                    <Nav navBarList = {navBarList} />
                    <Showinfo/>
                    <Newsbox/>
                    <Time/>
                    <Hotlist hostList = {hostList} tabBar={tabBarList} />
                    <GoodList/>
                    <div style={{height:'100px'}}></div>
                </div>  
            </div> 
        )
    }

    componentDidMount(){
        // console.log(this.props.getHomeData())
        this.props.getHomeData();
        let wrapper = document.querySelector(".wrapper")
        let scroll = new BScroll(wrapper)
        console.log(scroll);
    }
}

const mapStateToProps = (state)=>({
    swiperList:state.home.swiperList,
    navBarList : state.home.navBarList,
    hostList : state.home.hostList,
    tabBarList : state.home.tabBarList
})

const mapDispatchToProps = (dispatch)=>({
    getHomeData(){
        dispatch(swriper_action());
        dispatch(navBar_action());
        dispatch(hostList_action());
        dispatch(tabBar_action());
        // console.log(swriper_action())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
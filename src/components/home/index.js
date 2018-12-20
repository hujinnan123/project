import React,{Component,Fragment} from "react" ;
import {connect} from "react-redux";

import Header from "./children/header";
import Swipe from "./children/swiper";
import Nav from "./children/nav";
import Showinfo from "./children/showInfo";
import Newsbox from "./children/newsBox";
import Time from "./children/time";
import Hotlist from "./children/hotList";

import {
    swriper_action,
    navBar_action
}
from "../../action/actionCreator";
// console.log(swriper_action());


class Home extends Component{

    render(){
        let {swiperList,navBarList} = this.props;
        // console.log(swiperList);
        return(
            <Fragment>
                <Header/>
                <Swipe swiperItem = {swiperList}/>
                <Nav navBarList = {navBarList} />
                <Showinfo/>
                <Newsbox/>
                <Time/>
                <Hotlist/>
                <div style={{height:'54px'}}></div>
            </Fragment> 
        )
    }

    componentDidMount(){
        // console.log(this.props.getHomeData())
        this.props.getHomeData();
    }
}

const mapStateToProps = (state)=>({
    swiperList:state.home.swiperList,
    navBarList : state.home.navBarList
})

const mapDispatchToProps = (dispatch)=>({
    getHomeData(){
        dispatch(swriper_action());
        dispatch(navBar_action());
        // console.log(swriper_action())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
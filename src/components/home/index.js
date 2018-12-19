import React,{Component,Fragment} from "react" ;
import {connect} from "react-redux";

import Header from "./children/header";
import Swipe from "./children/swiper";
import Nav from "./children/nav";


import {
    swriper_action,
    navBar_action
}
from "../../action/actionCreator";
// console.log(swriper_action());


class Home extends Component{

    render(){
        let {swiperList} = this.props;
        // console.log(swiperList);
        return(
            <Fragment>
                <Header/>
                <Swipe swiperItem = {swiperList}/>
                <Nav />
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

})

const mapDispatchToProps = (dispatch)=>({
    getHomeData(){
        dispatch(swriper_action());
        dispatch(navBar_action());
        // console.log(swriper_action())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
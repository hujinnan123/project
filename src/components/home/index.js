import React,{Component,Fragment} from "react" ;
import Header from "./children/header";
import Swiper from "./children/swiper";
import Nav from "./children/nav";

export default class Home extends Component{
    constructor(){
        super()

        this.state = {

        }
    }
    render(){
        return(
            <Fragment>
                
                <Header/>
                <Swiper/>
                <Nav/>
            </Fragment> 
        )
    }
}
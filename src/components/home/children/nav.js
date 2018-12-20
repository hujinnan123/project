import React,{Component} from "react";
import "../style/nav.scss";

export default class Nav extends Component {
    render(){
        let { navBarList } = this.props;
        // console.log(navBarList.length);
        return (
            <div className="nav">
            {
                navBarList.length>0?navBarList.map((item,index)=>{
                    return  <span key={index}>
                                <img src={item.img} key={item.id} alt="mei"/>
                            </span>
                }):"正在加载"
            }
            </div>
        )
    }
}
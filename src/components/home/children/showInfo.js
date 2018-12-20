import React,{Component} from "react";
import "../style/showInfo.scss";

export default class Showinfo extends Component {
    render(){
        return (
            <div className="h-show">
                <div className="h-show-top">
                    <img src="https://img09.jiuxian.com/bill/2018/1219/751cdfec9ce749388eeca61aa3f6aed9.jpg" alt="mei"/>
                </div>
                <div className="h-show-buttom">
                    <img src="https://img09.jiuxian.com/bill/2018/1219/05bf56440a76459c9695037a2f0684cf.jpg" alt="mei"/>
                    <img src="https://img07.jiuxian.com/bill/2018/1219/0fa8f696437747279af7d7074a1c6448.png" alt="mei"/>
                </div>
            </div>
        )
    }
}
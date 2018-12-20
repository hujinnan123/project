import React,{Component} from "react";
import "../style/time.scss";

export default class Time extends Component {
    constructor() {
        super();
        this.state = { date: new Date() };
    }
    render(){
        let {date} = this.state;
        return (
            <div>
                <div className="h-spikeBox">
                    <div className="h-spikeTit">
                        <span>掌上秒拍</span>
                        <div className="h-lastTime">
                            <span>时间为：</span>
                            <span className="h-hours bg">{date.getHours()>10?date.getHours():"0"+date.getHours()}</span>
                            <em>:</em>
                            <span className="h-minutes bg">{date.getMinutes()>10?date.getMinutes():"0"+date.getMinutes()}</span>
                            <em>:</em>
                            <span className="h-seconds bg">{date.getSeconds()>10?date.getSeconds():"0"+date.getSeconds()}</span>
                        </div>
                        <div className="h-more">
                            <span>更多商品的你来抢！</span>
                            <span className="h-yuan"><i className="iconfont">&#xe79a;</i></span>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
}



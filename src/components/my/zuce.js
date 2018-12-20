import React,{Component,Fragment} from "react" ;

export default class Home extends Component{
    constructor(){
        super()

        this.state = {
            
        }
    }
    render(){
        return(
            <Fragment>
                <div className="w-header"> {/*头部*/}
                    <a href="#" className="w-left">返</a>
                    <h2>用户注册</h2>
                    <a href="#" className="w-right">列</a>
                </div>
                <div className="w-register">{/*下面那一大块*/}
                    <div className="w-zucecontent">
                        <div className="w-zucelet">
                            <i>图</i>
                            <input type="text" placeholder="手机号" />
                        </div>
                        <div className="w-zuceyzm">
                            <span>验证码</span>
                                <div className="w-zucetb">
                                    <i>图</i>
                                </div>
                        </div>
                        <div className="w-zucexym">
                            <input type="text" placeholder="请输入校验码"/> 
                            <p>
                                <i>图</i>
                                请输入校验码
                            </p>
                        </div>
                        <div className="w-zucehqxym">
                            <a href="#">
                                获取校验码
                            </a>
                        </div>
                        <div className="w-meiyong"></div>
                        <div className="w-zucepwd">
                            <i>图</i>
                            <input type="password" placeholder="请输入密码" />
                        </div>
                        <div className="w-zucepwd2">
                            <i>图</i>
                            <input type="password" placeholder="再次输入密码" />
                        </div>
                        <div className="w-zucebtn">
                            确认注册
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
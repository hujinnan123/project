import React,{Component,Fragment} from "react" ;
import "./style/my.scss";
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
                    <h2>用户登录</h2>
                    <a href="#" className="w-right">列</a>
                </div>
                <div className="w-content"> {/*下面那一大块*/}
                    <ul className="w-zzz">
                        <li className="zhdl">
                            <p>账号登录</p>
                            <span></span>
                        </li>
                        <li className="sjdl">
                            <p>手机动态密码登录</p>
                            <span></span>
                        </li>
                    </ul>
                    <div className="w-ipt">
                        <div className="w-user">
                            <i>图</i>
                            <input type="text" placeholder="用户名/邮箱/手机号" />
                            <p>
                                <i>图</i>
                                请输入用户名/邮箱/手机号
                            </p>
                        </div>
                        <div className="w-pwd">
                            <i>图</i>
                            <input type="password" placeholder="密码" />
                            <p>
                                <i>图</i>
                                请输入密码
                            </p>
                        </div>
                        <div className="w-yzm">
                            <span>验证码</span>
                            <div className="w-tb">
                                <i>图</i>
                            </div>
                        </div>
                        <div className="w-btn">
                            立即登录
                        </div>
                        <div className="w-serve">
                            <a href="#" className="w-regist">免费注册</a>
                            <a href="#" className="w-getpwd">找回密码</a>
                        </div>
                        <div className="w-title">
                            <div className="w-line"></div>
                            <div className="w-partner">合作伙伴登录</div>
                        </div>
                        <ul className="w-choose">
                            <li>
                                <a href="#" className="w-qq">图</a>
                            </li>
                            <li>
                                <a href="#" className="w-zfb">图</a>
                            </li>
                        </ul>
                    </div>
                    
                    
                </div> 
            </Fragment>
        )
    }
}
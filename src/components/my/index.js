import React,{Component,Fragment} from "react" ;
import "./style/my.scss";
export default class Home extends Component{
    render(){
        return(
            <Fragment>
                <div style={{height:'50px'}}></div>
                <div className="w-header"> {/*头部*/}
                    <span className="w-left"><i className="iconfont">&#xe799;</i> </span>
                    <h2>用户登录</h2>
                    <span className="w-right"><i className="iconfont">&#xe66d;</i></span>
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
                            <i className="iconfont">&#xe615;</i>
                            <input type="text" placeholder="用户名/邮箱/手机号" />
                            <p>
                                <i className="iconfont">&#xe625;</i>
                                请输入用户名/邮箱/手机号
                            </p>
                        </div>
                        <div className="w-pwd">
                            <i className="iconfont">&#xe62a;</i>
                            <input type="password" placeholder="密码" />
                            <p>
                                <i className="iconfont">&#xe625;</i>
                                请输入密码
                            </p>
                        </div>
                        <div className="w-yzm">
                            <span>验证码</span>
                            <input type="text" />
                            <div className="w-tb">
                                <i className="iconfont">&#xe626;</i>
                            </div>
                            <div className="w-yzmok">
                                <span>123456</span>
                            </div>
                        </div>
                        <div className="w-btn">
                            立即登录
                        </div>
                        <div className="w-serve">
                            <span className="w-regist">免费注册</span>
                            <span className="w-getpwd">找回密码</span>
                        </div>
                        <div className="w-title">
                            <div className="w-line"></div>
                            <div className="w-partner">合作伙伴登录</div>
                        </div>
                        <ul className="w-choose">
                            <li>
                                <span className="w-qq"><i className="iconfont">&#xe700;</i></span>
                            </li>
                            <li>
                                <span className="w-zfb"><i className="iconfont">&#xe64a;</i></span>
                            </li>
                        </ul>
                    </div>
                    
                    
                </div> 
            </Fragment>
        )
    }
}
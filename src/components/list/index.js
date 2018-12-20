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
                    <h2>找回密码</h2>
                    <a href="#" className="w-right">列</a>
                </div>
                <div className="w-zhmm">{/*下面那一大块*/}
                    <div className="w-zhmmcontent">
                        <div className="w-zhmmlet">
                            <i>图</i>
                            <input />
                            <span>账号绑定的手机号</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
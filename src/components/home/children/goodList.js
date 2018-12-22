import React,{Component} from "react";

export default class GoodList extends Component{
    render(){
        return (
            <div className="good_list">
                <div className="list_log">
                    <img src="https://img06.jiuxian.com/bill/2018/1219/d65fa685179e4e82b8df65cf3b14bf45.jpg" alt="mei"/>                
                    <img src="https://img06.jiuxian.com/bill/2018/1219/b1b5d8aa4b4a4d088ec279d4d5c1b235.jpg" alt="mei"/>                
                    <img src="https://img06.jiuxian.com/bill/2018/1221/91e3fa41d49547cfbd95f160d6b86ed7.jpg" alt="mei"/>                
                    <img src="https://img09.jiuxian.com/bill/2018/1221/d7ec668d643443cd9524ff587b31216a.jpg" alt="mei"/>    
                    <img style={{height:'35px'}} src="https://img08.jiuxian.com/bill/2018/0504/3b79febef26042daacd65629b8d4cecf.jpg"/>
                </div>

                <div className="list_flex">
                    <div className="flex_top">
                        <img src="https://img06.jiuxian.com/bill/2018/1116/e6f8a6a838b345fdb2a24db4bb5a19f2.jpg"/>
                        <img src="https://img06.jiuxian.com/bill/2018/1116/44ea9eb1afc24e108ee34169d5bca895.jpg"/>
                    </div>
                    <div className="flex_bottom">
                        
                    </div>
                </div>     
            </div>

        )
    }
}
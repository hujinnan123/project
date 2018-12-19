import {createStore,combineReducers,applyMiddleware} from "redux";
        //createStore: 用来生成 Store。 
        //combineReducers : 将子 Reducer 合并成一个大的函数。
        //applyMiddleware : applyMiddleware来自redux可以包装 store 的 dispatch
        //reduxPromiseMiddleware : 要放在applyMiddleware 这个对象中使用
import reduxPromiseMiddleware from "redux-promise-middleware";
import home from "./reducers/home";

const reducers = combineReducers({
    home,
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));


export default store;
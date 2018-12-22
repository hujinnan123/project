import {fetch} from "whatwg-fetch";

export const swriper_action = ()=>({
    type:"SWIPER",
    payload : new Promise(resolve=>{
        let url = "http://localhost:8080/rotation";
        fetch(url).then(res=>res.json()).then((data)=>{
            // console.log(data);
            // console.log(2222222222)
            resolve(data);
        })
    })
})

export const navBar_action = ()=>({
    type:"NAVBAR",
    payload : new Promise(resove=>{
        let url = "http://localhost:8080/navBar";
        fetch(url).then(res=>res.json()).then((data)=>{
            // console.log(data);
            resove(data);
        })
    })
})

export const hostList_action =()=>({
    type : "HOSTLIST",
    payload : new Promise(resove=>{
        let url = "http://localhost:8080/list";
        fetch(url).then(res=>res.json()).then((data)=>{
            resove(data);
        })
    })
})

export const tabBar_action =()=>({
    type : "TABBAR",
    payload : new Promise(resove=>{
        let url = "http://localhost:8080/tabBar";
        fetch(url).then(res=>res.json()).then((data)=>{
            resove(data);
        })
    })
})
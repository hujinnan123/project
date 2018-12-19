import {fetch} from "whatwg-fetch";

export const swriper_action = ()=>({
    type:"SWIPER_FULFILLED",
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
    type:"NAVBAR_FUFILLED",
    payload : new Promise(resove=>{
        let url = "http://localhost:8080/navBar";
        fetch(url).then(res=>res.json()).then((data)=>{
            console.log(data);
            resolve(data);
        })
    })
})
const defaultState = {
    swiperList : [],
    navBarList : []
}

export default (state=defaultState,action)=>{
    // console.log(action.type);
    switch(action.type){
        case "SWIPER_FULFILLED" :
            let swiperList = JSON.parse(JSON.stringify(state));
            swiperList.swiperList = action.payload;
            // console.log(swiperList.swiperList);
            return swiperList;
        case "NAVBAR_FULFILLED" :
            let navBarList = JSON.parse(JSON.stringify(state));
            navBarList.navBarList = action.payload;
            // console.log(1111111111111111)
            return navBarList
        default :
    }
    return state;
}
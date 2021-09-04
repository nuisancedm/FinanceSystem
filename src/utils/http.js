import service from './service'
//封装axios的get和post方法
export function get(url, params) {
    let config = {
        method: "get",
        url,
    }
    if(params){
        config.params=params
    }
    return service(config)
}

export function post(url, params) {
    let config = {
        method: "post",
        url,
    }
    if(params){
        config.data=params
    }
    return service(config)
}

//import {get} from '@/utils/http.js'
//封装token的本地存储方法

export function getToken(){
    return sessionStorage.getItem("token")
}

export function setToken(token){
    sessionStorage.setItem("token",token)
}


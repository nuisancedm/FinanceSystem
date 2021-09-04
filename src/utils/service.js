import axios from 'axios'
import { Message } from 'element-ui'

//自定义封装axios
const service = axios.create({
    baseURL: "localhost:8080",
    timeout: 5000
})

//axios响应拦截
service.interceptors.response.use(function (response) { //response参数是接受的数据 对数据进行处理
    const res = response.data
    if (res.success) {
        return res
    } else {
        Message({
            type: 'error',
            message: res.message || "登录信息错误！"
        })
        return Promise.reject(new Error(res.message||"登录信息错误"))
    }
}, function (error) {
    Message({
        type: 'error',
        message: error.message || "登录信息错误！"
    })
    return Promise.reject(new Error(error));
});

export default service
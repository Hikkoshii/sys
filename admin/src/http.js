import axios from 'axios'
import Vue from 'vue'

const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
})
http.interceptors.request.use(function(config){
    config.headers.Authorization = 'Bearer ' + localStorage.token
    return config;
},function(error){
    return Promise.reject(error);
});

http.interceptors.response.use(res => {
    return res
}, err => {
    if(err.response.data.message){
        Vue.prototype.$message({
            type: 'error',
            message:err.response.data.message
        })
    }
    return Promise.reject(err)//vue add element-ui时，element把message方法加入到Vue原型上了;因为全局使用了element ，所以这些方法被挂载到了Vue上了
})

export default http
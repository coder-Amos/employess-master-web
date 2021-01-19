import request from '@/utils/request'
// const qs = require('qs')

export default {
    // 登录
    login: (payload) => {
        return request({
            baseURL: '/api',
            url: `/login`,
            method: 'post',
            data:payload
        })
    },
    get_employess_list: (payload) => {
        return request({
            baseURL: '/api',
            url: `/getEmployess`,
            method: 'post',
            data:payload
        })
    }

}
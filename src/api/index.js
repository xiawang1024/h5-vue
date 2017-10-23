import axios from 'axios'

// axios.defaults.baseURL = '/api';
axios.defaults.baseURL = 'http://a.weixin.hndt.com/';
const postUserInfo = (name, company, mobile, openId) => axios.post('/user/add/hn', {
    name,
    company: company,
    mobile,
    openId
})

const checkOpenId = (openId) => axios.get('http://a.weixin.hndt.com/user/check/?openid=' + openId)


export {
    postUserInfo,
    checkOpenId
}
import axios from 'axios'

// axios.defaults.baseURL = '/api';
axios.defaults.baseURL = 'http://a.weixin.hndt.com/';
const postUserInfo = (name, company, mobile) => axios.post('/user/add/hn', {
    name,
    company: company,
    mobile
})

export {
    postUserInfo
}